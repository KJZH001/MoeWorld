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
        text: '眷族们',
        collapsed: false,
        items: [
          { text: '概述', link: '眷族们/概述' },
          { text: '星空酱', link: '眷族们/星空酱' },
          { text: '琉璃酱', link: '眷族们/琉璃酱' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KJZH001/MoeWorld' }
    ]
  }
})
