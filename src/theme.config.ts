import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  "siteName": "TechnoOfficeBlog",
  "locale": "zh-CN",
  "analytics": {
    "googleAnalytics": {
      "measurementId": ""
    },
    "umami": {
      "websiteId": "",
      "scriptUrl": ""
    }
  },
  "nav": [
    {
      "dropbox": {
        "enable": false,
        "items": []
      },
      "href": "/",
      "icon": "i-ri-home-line",
      "text": "首页"
    },
    {
      "dropbox": {
        "enable": false,
        "items": []
      },
      "href": "/about/",
      "icon": "i-ri-user-3-line",
      "text": "关于"
    },
    {
      "dropbox": {
        "enable": true,
        "items": [
          {
            "dropbox": {
              "enable": true,
              "items": []
            },
            "href": "/categories/",
            "icon": "i-ri-book-shelf-fill",
            "text": "分类"
          },
          {
            "dropbox": {
              "enable": true,
              "items": []
            },
            "href": "/tags/",
            "icon": "i-ri-price-tag-3-fill",
            "text": "标签"
          },
          {
            "dropbox": {
              "enable": true,
              "items": []
            },
            "href": "/archives/",
            "icon": "i-ri-archive-line",
            "text": "归档"
          }
        ]
      },
      "href": "/random/",
      "icon": "i-ri-quill-pen-fill",
      "text": "文章"
    },
    {
      "dropbox": {
        "enable": false,
        "items": []
      },
      "href": "/friends/",
      "icon": "i-ri-link",
      "text": "友链"
    },
    {
      "dropbox": {
        "enable": false,
        "items": []
      },
      "href": "/moments/",
      "icon": "i-ri-chat-quote-line",
      "text": "动态"
    },
    {
      "dropbox": {
        "enable": false,
        "items": []
      },
      "href": "/statistics/",
      "icon": "i-ri-bar-chart-box-line",
      "text": "统计"
    }
  ],
  "brand": {
    "title": "TechnoOfficeBlog",
    "subtitle": "科技茶馆",
    "logo": "✨"
  },
  "cover": {
    "enable": true,
    "preload": true,
    "advancedCarousel": true,
    "fixedCover": {
      "enable": true,
      "url": "cover-4"
    },
    "coverUrls": [
      "https://www.dmoe.cc/random.php"
    ],
    "nextGradientCover": false
  },
  "sidebar": {
    "author": "THB009",
    "description": "人间杂事记录员",
    "social": {
      github: {
        url: "https://github.com/THB009",
        icon: "i-ri-github-fill",
      },
      twitter: {
        url: "https://x.com/gatg_capt_fu",
        icon: "i-ri-twitter-x-line",
      },
      email: {
        url: "mailto:779703688@qq.com",
        icon: "i-ri-mail-line",
      },
    },
    "menu": []
  },
  "footer": {
    "since": 2025,
    "icon": {
      "name": "sakura rotate",
      "color": "var(--color-pink)"
    },
    "count": true,
    "powered": true,
    "icp": {
      "enable": false,
      "icpnumber": "津ICP备2022001375号",
      "icpurl": "https://beian.miit.gov.cn/"
    }
  },
  "tagCloud": {
    "startColor": "var(--grey-6)",
    "endColor": "var(--color-blue)"
  },
  "widgets": {
    "randomPosts": true,
    "recentComments": true,
    "recentCommentsLimit": 10
  },
  "comments": {
    "enable": true,
    "waline": {
      "serverURL": "https://pl.gatg.top/",
      "lang": "zh-CN"
    }
  },
  "hyc": {
    "enable": false,
    "aiSummary": {
      "enable": true,
      "title": "AI 摘要",
      "showModel": true
    },
    "aiRecommend": {
      "enable": true,
      "limit": 3,
      "minSimilarity": 0.4
    }
  },
  "diagnostics": {
    "suppressFsWatcherMaxListenersWarning": true
  },
  "nyxPlayer": {
    "enable": false,
    "preset": "shokax",
    "darkModeTarget": ":root[data-theme=\"dark\"]",
    "urls": [
      {
        "name": "默认歌单",
        "url": "https://music.163.com/#/playlist?id=2943811283"
      }
    ]
  },
  "visibilityTitle": {
    "enable": true,
    "leaveTitle": "👀 你先忙，我等你回来~",
    "returnTitle": "🎉 欢迎回来！",
    "restoreDelay": 3000
  },
  "home": {
    "selectedCategories": [
      {
        "name": "Tutorial"
      },
      {
        "name": "Frontend"
      },
      {
        "name": "网络安全",
        cover: "/images/ns-cover.jpg",
      },
      {
        "name": "小说联播",
        cover: "/images/cover.jpg",
      }
    ],
    "pageSize": 5,
    "title": {
      "behavior": "default",
      "customTitle": ""
    }
  },
  "layout": {
    "mode": "three-column",
    "rightSidebar": {
      "order": [
        "announcement",
        "search",
        "calendar",
        "recentMoments",
        "randomPosts",
        "tagCloud"
      ],
      "announcement": true,
      "search": true,
      "calendar": true,
      "recentMoments": true,
      "randomPosts": true,
      "tagCloud": true
    }
  },
  "friends": {
    "title": "友链",
    "description": "卡片式展示，支持站点预览与主题色点缀。",
    "links": [
      {
        "author": "Astro Team",
        "avatar": "https://avatars.githubusercontent.com/u/44914786?s=200&v=4",
        "color": "var(--color-orange)",
        "desc": "全站体验轻快的静态站点框架，适合内容型站点与博客。",
        "siteImage": "https://astro.build/assets/press/astro-logo-dark.svg",
        "title": "Astro",
        "url": "https://astro.build/"
      },
      {
        "author": "Svelte Team",
        "avatar": "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
        "color": "var(--color-red)",
        "desc": "编译时框架，现代与简洁，组件写起来很顺手。",
        "title": "Svelte",
        "url": "https://svelte.dev/"
      },
      {
        "author": "Vite Team",
        "avatar": "https://avatars.githubusercontent.com/u/65625612?s=200&v=4",
        "color": "var(--color-blue)",
        "desc": "快速的前端开发构建工具，HMR 体验很棒。",
        "title": "Vite",
        "url": "https://vite.dev/"
      },
      {
        "author": "Bun Team",
        "avatar": "https://avatars.githubusercontent.com/u/108928776?s=200&v=4",
        "color": "var(--color-green)",
        "desc": "一体化 JavaScript 运行时，速度与工具链兼备。",
        "siteImage": "https://bun.sh/logo.svg",
        "title": "Bun",
        "url": "https://bun.sh/"
      }
    ]
  },
  "copyright": {
    "license": "CC-BY-NC-SA-4.0",
    "show": true
  }
});
