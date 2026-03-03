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
          { text: '开始', link: '/start' },
          { text: '许可', link: '/license' },
        ]
      },
      {
        text: '眷族们',
        collapsed: false,
        items: [
          { text: '概述', link: '/眷族们/概述' },
          { text: '星空酱', link: '/眷族们/星空酱' },
          { text: '琉璃酱', link: '/眷族们/琉璃酱' },
        ]
      },
      {
        text: 'bot命令指南',
        collapsed: false,
        items: [
          { text: '概述', link: '/bot命令指南/概述' },
          { text: '抽签', link: '/bot命令指南/抽签' },
          { text: '抽干员', link: '/bot命令指南/抽干员' },
          { text: '塔罗牌', link: '/bot命令指南/塔罗牌' },
        ]
      },
      {
        text: '设定集',
        collapsed: false,
        items: [
          { 
            text: '澪域：传说', 
            collapsed: false,
            items: [
              { text: '概述', link: '/设定集/澪域：风愿/种族/精灵族' },
              { 
                text: '种族', 
                collapsed: false,
                items: [
                  { text: '精灵族', link: '/设定集/澪域：风愿/种族/精灵族' },
                  { text: '天使', link: '/设定集/澪域：风愿/种族/天使' }
                ]
              },
            ]
          },
          { 
            text: '澪域：风愿', 
            collapsed: false,
            items: [
              { 
                text: '种族', 
                collapsed: false,
                items: [
                  { text: '精灵族', link: '/设定集/澪域：风愿/种族/精灵族' },
                  { text: '天使', link: '/设定集/澪域：风愿/种族/天使' }
                ]
              },
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KJZH001/MoeWorld' }
    ]
  }
})
