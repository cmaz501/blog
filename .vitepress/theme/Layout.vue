<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout: DefaultLayout } = DefaultTheme
const { frontmatter } = useData()

const categories = [
  { name: '首页',         href: '/',              icon: '🏠' },
  { name: '关于cmaz501',  href: '/about/first-post', icon: '👤' },
  { name: '💻 代码',      href: '/code/',         icon: '' },
  { name: '📜 专利',      href: '/patent/',       icon: '' },
  { name: '🧠 哲学',      href: '/philosophy/',   icon: '' },
  { name: '🎵 音乐',      href: '/music/',        icon: '' },
]
</script>

<template>
  <!-- 首页使用 patent5.com 风格布局 -->
  <div v-if="frontmatter.layout === 'home'" class="patent5-page">
    <!-- 顶部装饰 Banner -->
    <header class="banner">
      <div class="banner-inner">
        <div class="banner-left">
          <h1 class="banner-title">爱上<span class="hl">精致</span>生活</h1>
          <p class="banner-sub">一杯清茶、一本好书、一段喜爱的编程、一首听腻了的歌，爱上写代码与生活的诗意。</p>
        </div>
        <div class="banner-right">
          <h2 class="site-name">cmaz501 · 四维空间</h2>
          <p class="site-tag">代码 · 专利 · 哲学 · 音乐</p>
          <p class="site-slogan">写代码，也写诗意生活！</p>
        </div>
      </div>
    </header>

    <!-- 绿色导航条 -->
    <nav class="green-bar">
      <div class="green-bar-inner">
        <a v-for="item in categories" :key="item.href" :href="item.href" class="green-link">{{ item.name }}</a>
        <div class="green-search">🔍 搜索文章：<input type="text" placeholder="输入关键词，回车！" class="search-input" /></div>
      </div>
    </nav>

    <!-- 主体两栏：左主 + 右辅 -->
    <div class="body-wrap">
      <main class="main-area">
        <slot />
      </main>

      <aside class="side-area">
        <!-- 分类 -->
        <div class="side-card">
          <h3 class="side-title">分类</h3>
          <ul class="cat-list">
            <li><a href="/code/">💻 代码笔记</a></li>
            <li><a href="/patent/">📜 专利布局</a></li>
            <li><a href="/philosophy/">🧠 哲学札记</a></li>
            <li><a href="/music/">🎵 音乐评论</a></li>
            <li><a href="/code/frontend">前端开发</a></li>
            <li><a href="/code/backend">后端架构</a></li>
            <li><a href="/code/open-source">开源项目</a></li>
            <li><a href="/patent/writing">专利撰写</a></li>
            <li><a href="/patent/strategy">专利战略</a></li>
            <li><a href="/patent/cases">经典案例</a></li>
            <li><a href="/philosophy/eastern">东方哲学</a></li>
            <li><a href="/philosophy/western">西方哲学</a></li>
            <li><a href="/philosophy/tech">技术哲学</a></li>
            <li><a href="/music/reviews">音乐评论</a></li>
            <li><a href="/music/theory">音乐理论</a></li>
            <li><a href="/music/creation">原创作品</a></li>
            <li><a href="/about/first-post">个人简介</a></li>
            <li><a href="/about/first-post">授权说明</a></li>
            <li><a href="/about/first-post">其他文章</a></li>
            <li><a href="/about/first-post">意见反馈</a></li>
            <li><a href="/about/first-post">置顶公告</a></li>
            <li><a href="/about/first-post">零币无忧</a></li>
            <li><a href="/about/first-post">掌门日志</a></li>
            <li><a href="/about/first-post">掌门讲经</a></li>
            <li><a href="/about/first-post">绝世分析</a></li>
            <li><a href="/about/first-post">涉外申请</a></li>
            <li><a href="/about/first-post">语言风格</a></li>
          </ul>
        </div>

        <!-- 博主介绍 -->
        <div class="side-card">
          <h3 class="side-title">博主介绍</h3>
          <div class="profile">
            <div class="avatar">cm</div>
            <div class="profile-info">
              <p class="profile-name">李银惠 · cmaz501</p>
              <p class="profile-tag">专利代理 / 律师</p>
              <p class="profile-tag">TjayLeaf</p>
              <p class="profile-tag">开迈科技 · 金石意象</p>
            </div>
          </div>
          <p class="profile-detail">📞 159 1586 2046</p>
          <p class="profile-detail">✉️ cmaz501@139.com</p>
          <p class="profile-detail">QQ: 23095527</p>
          <hr class="profile-divider" />
          <p class="profile-bio">专利代理 · 律师 · 工程师。</p>
          <p class="profile-bio">开迈科技创始团队成员，专注代码、专利、哲学、音乐四维研究。</p>
          <p class="profile-bio">本公众号坚持日更，免费分享专利布局、代码笔记、哲学思考、音乐评论，扫描下方二维码关注。</p>
        </div>

        <!-- 二维码占位 -->
        <div class="side-card qr-card">
          <div class="qr-box">
            <div class="qr-inner">微信<br />二维码</div>
          </div>
          <p class="qr-tip">扫码上面的二维码，加我微信好友！</p>
        </div>

        <!-- 热点文章 -->
        <div class="side-card">
          <h3 class="side-title">热点文章</h3>
          <ul class="hot-list">
            <li><span class="hot-num">1.</span><a href="/code/">真实李银惠 - 42,521 次阅读</a></li>
            <li><span class="hot-num">2.</span><a href="/patent/">留言本 - 41,454 次阅读</a></li>
            <li><span class="hot-num">3.</span><a href="/philosophy/">服务与报价 - 31,253 次阅读</a></li>
            <li><span class="hot-num">4.</span><a href="/music/">"专利神教掌门" - 27,814 次阅读</a></li>
            <li><span class="hot-num">5.</span><a href="/code/">专注于专利 - 27,532 次阅读</a></li>
            <li><span class="hot-num">6.</span><a href="/patent/">硕士课题 - 18,545 次阅读</a></li>
            <li><span class="hot-num">7.</span><a href="/philosophy/">专利神教掌门日志 - 1,085 次阅读</a></li>
          </ul>
        </div>

        <!-- 相关标签云 -->
        <div class="side-card">
          <h3 class="side-title">相关标签</h3>
          <div class="tag-cloud">
            <a href="/" class="tag">专利</a>
            <a href="/" class="tag">专利代理</a>
            <a href="/" class="tag">代理</a>
            <a href="/" class="tag">专利布局</a>
            <a href="/" class="tag">无效</a>
            <a href="/" class="tag">无不正当竞争</a>
            <a href="/" class="tag">实用新型</a>
            <a href="/" class="tag">审查意见</a>
            <a href="/" class="tag">复审无效</a>
            <a href="/" class="tag">侵权分析</a>
            <a href="/" class="tag">专利战略</a>
            <a href="/" class="tag">权利要求</a>
            <a href="/" class="tag">外观设计</a>
            <a href="/" class="tag">笔记</a>
            <a href="/" class="tag">软件</a>
            <a href="/" class="tag">技术交底书</a>
            <a href="/" class="tag">合同</a>
            <a href="/" class="tag">无效答辩</a>
            <a href="/" class="tag">申请</a>
            <a href="/" class="tag">cmaz501</a>
            <a href="/" class="tag">金石意象</a>
            <a href="/" class="tag">开迈科技</a>
            <a href="/" class="tag">TjayLeaf</a>
          </div>
        </div>

        <!-- Meta -->
        <div class="side-card">
          <h3 class="side-title">Meta</h3>
          <ul class="cat-list">
            <li><a href="/about/first-post">登录</a></li>
            <li><a href="/about/first-post">文章 RSS</a></li>
            <li><a href="/about/first-post">评论 RSS</a></li>
            <li><a href="/about/first-post">WordPress.org</a></li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- 底部 -->
    <footer class="footer-bar">
      <div class="footer-inner">
        <p>备案号：粤ICP备12037579号-1</p>
        <p>版权所有 © 2007-2026 cmaz501 · 开迈科技 · 金石意象</p>
        <p>欢迎访问 cmaz501 维基百科站 http://www.cmaz501.com ｜ 回到顶部</p>
      </div>
    </footer>
  </div>

  <!-- 非首页用 VitePress 默认布局 -->
  <DefaultLayout v-else />
</template>

<style scoped>
/* ========== 整体框架 ========== */
.patent5-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #c8e6a0 0%, #d8ecb4 8%, #f0f7e4 18%, #f5faec 100%);
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  color: #333;
  font-size: 13px;
  line-height: 1.65;
}

a { color: #2a7d2e; text-decoration: none; }
a:hover { color: #1a4d1e; text-decoration: underline; }

/* ========== 顶部 Banner ========== */
.banner {
  background:
    radial-gradient(circle at 90% 20%, rgba(255,255,255,0.4) 0%, transparent 30%),
    linear-gradient(180deg, #b8d984 0%, #c8e6a0 60%, #d8ecb4 100%);
  padding: 28px 0 22px;
  border-bottom: 3px solid #95c267;
}
.banner-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.banner-title {
  font-size: 2.6rem;
  color: #2d4a1a;
  font-weight: 700;
  margin: 0;
  font-style: italic;
  letter-spacing: 1px;
}
.banner-title .hl { color: #6ba73a; font-size: 3rem; }
.banner-sub {
  font-size: 0.85rem;
  color: #4a6b3a;
  margin: 6px 0 0;
}
.banner-right { text-align: right; }
.site-name {
  font-size: 1.6rem;
  color: #2d4a1a;
  margin: 0;
  font-weight: 600;
}
.site-tag {
  font-size: 1rem;
  color: #4a6b3a;
  margin: 4px 0 0;
  letter-spacing: 1px;
}
.site-slogan {
  font-size: 0.8rem;
  color: #6b8a5a;
  margin: 4px 0 0;
  font-style: italic;
}

/* ========== 绿色导航条 ========== */
.green-bar {
  background: linear-gradient(180deg, #7eb04a 0%, #6a9a3a 100%);
  border-top: 1px solid #95c267;
  border-bottom: 1px solid #4a6b1a;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.green-bar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 36px;
  gap: 4px;
}
.green-link {
  color: #fff;
  font-size: 0.85rem;
  padding: 8px 16px;
  border-right: 1px solid rgba(255,255,255,0.2);
  text-decoration: none;
  transition: background 0.15s;
}
.green-link:first-child { border-left: 1px solid rgba(255,255,255,0.2); }
.green-link:hover {
  background: rgba(0,0,0,0.15);
  color: #fff;
  text-decoration: none;
}
.green-search {
  margin-left: auto;
  color: #fff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.search-input {
  border: 1px solid #4a6b1a;
  background: #fff;
  padding: 3px 8px;
  font-size: 0.78rem;
  border-radius: 2px;
  width: 140px;
}

/* ========== 主体两栏 ========== */
.body-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.main-area {
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 1px solid #c8e0a8;
  border-radius: 4px;
  padding: 22px 26px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.side-area {
  width: 230px;
  flex-shrink: 0;
}

/* ========== 侧边卡片 ========== */
.side-card {
  background: #fff;
  border: 1px solid #c8e0a8;
  border-radius: 4px;
  padding: 12px 14px;
  margin-bottom: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.side-title {
  font-size: 0.95rem;
  color: #2d4a1a;
  margin: 0 0 10px;
  padding-bottom: 6px;
  border-bottom: 2px solid #95c267;
  font-weight: 600;
}

.cat-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cat-list li {
  font-size: 0.82rem;
  padding: 3px 0 3px 12px;
  position: relative;
  line-height: 1.8;
}
.cat-list li::before {
  content: "●";
  color: #7eb04a;
  position: absolute;
  left: 0;
  font-size: 0.6rem;
  top: 7px;
}
.cat-list a { color: #444; }
.cat-list a:hover { color: #2a7d2e; }

/* 博主 */
.profile {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a9a3a, #4a6b1a);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.profile-info { flex: 1; min-width: 0; }
.profile-name { font-weight: 600; color: #2d4a1a; margin: 0; font-size: 0.85rem; }
.profile-tag { margin: 1px 0; font-size: 0.72rem; color: #666; }
.profile-detail { margin: 2px 0; font-size: 0.75rem; color: #555; }
.profile-divider { border: none; border-top: 1px dashed #c8e0a8; margin: 8px 0; }
.profile-bio { font-size: 0.75rem; color: #555; margin: 4px 0; line-height: 1.55; }

/* 二维码 */
.qr-card { text-align: center; }
.qr-box {
  width: 130px;
  height: 130px;
  margin: 6px auto 8px;
  border: 2px solid #2d4a1a;
  background:
    linear-gradient(45deg, #2d4a1a 25%, transparent 25%) 0 0/10px 10px,
    linear-gradient(-45deg, #2d4a1a 25%, transparent 25%) 0 0/10px 10px,
    #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qr-inner {
  background: #fff;
  padding: 6px 10px;
  font-size: 0.75rem;
  color: #2d4a1a;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
}
.qr-tip { font-size: 0.72rem; color: #666; margin: 0; }

/* 热点 */
.hot-list { list-style: none; padding: 0; margin: 0; }
.hot-list li {
  font-size: 0.78rem;
  padding: 3px 0;
  display: flex;
  gap: 4px;
  line-height: 1.5;
}
.hot-num { color: #95c267; font-weight: 600; flex-shrink: 0; }
.hot-list a { color: #555; }
.hot-list a:hover { color: #2a7d2e; }

/* 标签云 */
.tag-cloud { display: flex; flex-wrap: wrap; gap: 4px; }
.tag {
  font-size: 0.72rem;
  background: #e8f3d8;
  color: #4a6b1a;
  padding: 2px 7px;
  border-radius: 2px;
  text-decoration: none;
  border: 1px solid #c8e0a8;
}
.tag:hover {
  background: #7eb04a;
  color: #fff;
  text-decoration: none;
}

/* ========== 底部 ========== */
.footer-bar {
  background: #6a9a3a;
  color: #fff;
  padding: 18px 0;
  margin-top: 24px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  font-size: 0.78rem;
}
.footer-inner p { margin: 3px 0; opacity: 0.95; }
.footer-inner a { color: #fff; text-decoration: underline; }

/* 响应式 */
@media (max-width: 768px) {
  .banner-inner { flex-direction: column; gap: 12px; text-align: center; }
  .banner-right { text-align: center; }
  .body-wrap { flex-direction: column; }
  .side-area { width: 100%; }
  .green-bar-inner { flex-wrap: wrap; height: auto; padding: 6px 12px; }
  .green-search { width: 100%; margin: 6px 0 0; }
}
</style>
