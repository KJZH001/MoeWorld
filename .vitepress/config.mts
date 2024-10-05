import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "萌界参考手册",
  description: "一切来自于梦，万物皆可为萌！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '附录', link: '/other' }
    ],

    sidebar: [
      {
        text: '前言',
        collapsed: false,
        items: [
          { text: '开始', link: 'start' },
        ]
      },
      {
        text: '前言',
        collapsed: false,
        items: [
          { text: '什么是 VitePress？', link: 'what-is-vitepress' },
          { text: '快速开始', link: 'getting-started' },
          { text: '路由', link: 'routing' },
          { text: '部署', link: 'deploy' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KJZH001/MoeWorld' }
    ]
  }
})
