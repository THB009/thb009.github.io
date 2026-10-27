/**
 * 确保 cn-font-split 的原生库存在。
 *
 * 背景：`vite-plugin-font` 在加载配置时就会 eager import `cn-font-split`，
 * 后者用 koffi 加载 release 里的 `libffi-*` 原生库；而 cn-font-split 自己的
 * postinstall 是 `node ./dist/cli.js i default || node -v`，下载失败会被 `||`
 * 吞掉、安装继续，直到 `astro build` 才报 ERR_FFI。
 *
 * 这里在构建/开发前兜底：本地已有就跳过；没有就按平台从 GitHub Release 下载，
 * GitHub 不通时走 gh-proxy 镜像。仅在有网络的环境（本机 / CI / Cloudflare）需要。
 */
import { existsSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** 与 JS 包 7.4.3 实测兼容的 core 版本 */
const CORE_VERSION = process.env.CN_FONT_SPLIT_CORE_VERSION ?? "7.6.8";

/** 低于该体积视为下载失败（真实库 6~8MB） */
const MIN_BYTES = 1_000_000;

const LIB_BY_PLATFORM = {
  "linux-x64": "libffi-x86_64-unknown-linux-gnu.so",
  "linux-arm64": "libffi-aarch64-unknown-linux-gnu.so",
  "win32-x64": "libffi-x86_64-pc-windows-msvc.dll",
  "win32-arm64": "libffi-aarch64-pc-windows-msvc.dll",
  "darwin-x64": "libffi-x86_64-apple-darwin.dylib",
  "darwin-arm64": "libffi-aarch64-apple-darwin.dylib",
};

const distDir = join(process.cwd(), "node_modules", "cn-font-split", "dist");
const libName = LIB_BY_PLATFORM[`${process.platform}-${process.arch}`];
const target = libName ? join(distDir, libName) : "";

const isPresent = () => Boolean(target) && existsSync(target) && statSync(target).size >= MIN_BYTES;

if (!libName) {
  console.log(`[font-split] 未知平台 ${process.platform}-${process.arch}，跳过检查`);
  process.exit(0);
}

if (isPresent()) {
  console.log(`[font-split] 原生库已就绪: ${libName}`);
  process.exit(0);
}

if (!existsSync(distDir)) {
  // 依赖还没装（例如脚本被单独执行），交给安装流程处理
  console.log("[font-split] 未找到 cn-font-split，跳过（依赖安装后会再次检查）");
  process.exit(0);
}

const sources = [
  `https://github.com/KonghaYao/cn-font-split/releases/download/${CORE_VERSION}/${libName}`,
  `https://gh-proxy.org/https://github.com/KonghaYao/cn-font-split/releases/download/${CORE_VERSION}/${libName}`,
];

let lastError = "";
for (const url of sources) {
  try {
    console.log(`[font-split] 下载 ${url}`);
    // 镜像按顺序尝试，必须串行
    // oxlint-disable-next-line no-await-in-loop
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(180_000),
    });

    if (!response.ok) {
      lastError = `HTTP ${response.status}`;
      continue;
    }

    // oxlint-disable-next-line no-await-in-loop
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.byteLength < MIN_BYTES) {
      lastError = `文件过小 (${buffer.byteLength}B)`;
      continue;
    }

    const tmp = `${target}.download`;
    writeFileSync(tmp, buffer);
    renameSync(tmp, target);
    console.log(`[font-split] 完成: ${libName} (${(buffer.byteLength / 1024 / 1024).toFixed(1)}MB)`);
    process.exit(0);
  } catch (error) {
    lastError = error instanceof Error ? error.message : String(error);
  }
}

console.error(
  `[font-split] 原生库缺失且下载失败（${lastError}）。\n` +
    `可手动放置到 ${target}，或设置 CN_FONT_SPLIT_CORE_VERSION 指定版本。`,
);
process.exit(1);
