import { defineConfig } from 'vitepress'

// 导航分类定义 — 对应 patent5.com 的导航结构
const sidebar = {
  '/code/': [
    { text: '💻 代码', items: [
      { text: '全部文章', link: '/code/' },
      { text: '前端开发', link: '/code/frontend' },
      { text: '后端 & DevOps', link: '/code/backend' },
      { text: '开源项目', link: '/code/open-source' },
    ]},
  ],
  '/patent/': [
    { text: '📜 专利', items: [
      { text: '全部文章', link: '/patent/' },
      { text: '专利撰写', link: '/patent/writing' },
      { text: '专利布局', link: '/patent/strategy' },
      { text: '案例分析', link: '/patent/cases' },
    ]},
  ],
  '/philosophy/': [
    { text: '🧠 哲学', items: [
      { text: '全部文章', link: '/philosophy/' },
      { text: '东方哲学', link: '/philosophy/eastern' },
      { text: '西方哲学', link: '/philosophy/western' },
      { text: '技术与哲学', link: '/philosophy/tech' },
    ]},
  ],
  '/music/': [
    { text: '🎵 音乐', items: [
      { text: '全部文章', link: '/music/' },
      { text: '乐评 & 推荐', link: '/music/reviews' },
      { text: '音乐理论', link: '/music/theory' },
      { text: '创作笔记', link: '/music/creation' },
    ]},
  ],
}

export default defineConfig({
  // 站点元数据
  title: 'cmaz501',
  description: 'cmaz501 / TjayLeaf 的个人博客 — 代码·专利·哲学·音乐 | 开迈科技 · 金石意象',
  lang: 'zh-CN',

  // URL 前缀（GitHub Pages 下若用非 username.github.io 仓库需设置 base）
  // 部署到 Vercel 不需要 base，留空即可
  base: '/',

  // head 标签 — SEO + 品牌标识
  head: [
    ['meta', { name: 'author', content: 'cmaz501 / TjayLeaf' }],
    ['meta', { name: 'keywords', content: 'cmaz501,TjayLeaf,开迈科技,金石意象,代码,专利,哲学,音乐' }],
    ['meta', { property: 'og:title', content: 'cmaz501 — 代码·专利·哲学·音乐' }],
    ['meta', { property: 'og:description', content: 'cmaz501 / TjayLeaf 的个人博客 | 开迈科技 · 金石意象' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  // 主题配置
  themeConfig: {
    // 网站标题
    siteTitle: 'cmaz501',

    // 顶部导航 — 对标 patent5.com 顶栏
    nav: [
      { text: '首页', link: '/' },
      { text: '💻 代码', link: '/code/' },
      { text: '📜 专利', link: '/patent/' },
      { text: '🧠 哲学', link: '/philosophy/' },
      { text: '🎵 音乐', link: '/music/' },
    ],

    // 侧边栏 — 同 patent5.com 左侧分类导航
    sidebar,

    // 页脚
    footer: {
      message: 'cmaz501 — 开迈科技 · 金石意象',
      copyright: `© ${new Date().getFullYear()} cmaz501 / TjayLeaf. 保留所有权利。`
    },

    // 文档页脚（上一篇/下一篇）
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'full', timeStyle: 'medium' }
    },

    // 大纲标题
    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    // socialLinks — 后续可填入 GitHub/Twitter 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmaz501' },
    ],

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文章' },
          modal: { noResultsText: '未找到结果', footer: { selectText: '选择', navigateText: '切换' } }
        }
      }
    },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,  // 代码块行号
  },
})
