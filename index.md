---
layout: home
title: cmaz501
titleTemplate: 代码·专利·哲学·音乐
---

<!-- 文章列表为静态 HTML，后续可通过 VitePress 数据加载或构建脚本动态生成 -->

<div class="home-wrapper">

  <!-- 左侧：博主信息 + 分类导航 — 对标 patent5.com 的左侧栏 -->
  <aside class="home-sidebar">
    <div class="brand-card">
      <h1 class="brand-name">cmaz501</h1>
      <p class="brand-tagline">代码·专利·哲学·音乐</p>
      <p class="brand-sub">开迈科技 · 金石意象</p>
    </div>

    <nav class="category-nav">
      <h2>内容分类</h2>
      <a href="/code/" class="nav-item">💻 代码 <span class="nav-badge">技术笔记</span></a>
      <a href="/patent/" class="nav-item">📜 专利 <span class="nav-badge">知识产权</span></a>
      <a href="/philosophy/" class="nav-item">🧠 哲学 <span class="nav-badge">思考札记</span></a>
      <a href="/music/" class="nav-item">🎵 音乐 <span class="nav-badge">听觉审美</span></a>
    </nav>

    <div class="brand-footer">
      <p><strong>TjayLeaf</strong></p>
      <p>探索者 · 创造者 · 思想者</p>
      <p><small>—— 开迈科技 · 金石意象 ——</small></p>
    </div>
  </aside>

  <!-- 右侧：文章列表 — 对标 patent5.com 的文章列表区 -->
  <main class="home-main">
    <h2 class="section-title">📝 最新文章</h2>

    <ul class="post-list">
      <!-- ✅ 静态文章列表 — 直接编辑此 HTML 或后续接入自动生成脚本 -->
      <li class="post-item">
        <span class="post-date">2026-07-15</span>
        <span class="post-category" style="color:#888;border-color:#888">公告</span>
        <a href="/about/first-post" class="post-link">博客上线：代码·专利·哲学·音乐四维空间</a>
      </li>
      <li class="post-item">
        <span class="post-date">2026-07-14</span>
        <span class="post-category" style="color:#3178c6;border-color:#3178c6">代码</span>
        <a href="/code/" class="post-link">Hexo vs VitePress vs Hugo — 静态博客框架选型笔记</a>
      </li>
      <li class="post-item">
        <span class="post-date">2026-07-13</span>
        <span class="post-category" style="color:#e6a23c;border-color:#e6a23c">专利</span>
        <a href="/patent/" class="post-link">发明专利权利要求撰写的基本逻辑</a>
      </li>
      <li class="post-item">
        <span class="post-date">2026-07-12</span>
        <span class="post-category" style="color:#67c23a;border-color:#67c23a">哲学</span>
        <a href="/philosophy/" class="post-link">维特根斯坦：语言的边界就是世界的边界</a>
      </li>
      <li class="post-item">
        <span class="post-date">2026-07-11</span>
        <span class="post-category" style="color:#f56c6c;border-color:#f56c6c">音乐</span>
        <a href="/music/" class="post-link">Debussy Arabesque No.1 赏析</a>
      </li>
    </ul>

    <div class="home-footer-info">
      <p>👋 欢迎来到 cmaz501 的博客空间。</p>
      <p>这里记录代码、专利、哲学、音乐四个维度的探索与思考。</p>
      <p>关注 <strong>开迈科技</strong> 与 <strong>金石意象</strong>，见证思维的交汇。</p>
    </div>
  </main>

</div>

<style scoped>
/* ===== 整体布局 — 双栏，对标 patent5.com ===== */
.home-wrapper {
  display: flex;
  min-height: calc(100vh - 64px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 32px;
  gap: 32px;
}

/* ===== 左侧栏 ===== */
.home-sidebar {
  width: 260px;
  flex-shrink: 0;
}

.brand-card {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 24px 20px;
  margin-bottom: 20px;
  text-align: center;
}

.brand-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  color: var(--vp-c-brand);
}

.brand-tagline {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 8px 0 4px;
}

.brand-sub {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

/* 分类导航 */
.category-nav {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 20px;
}

.category-nav h2 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--vp-c-text-3);
  margin: 0 0 12px;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
  font-size: 0.95rem;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: color 0.2s;
}

.nav-item:last-child { border-bottom: none; }

.nav-item:hover { color: var(--vp-c-brand); }

.nav-badge {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  padding: 2px 8px;
  border-radius: 10px;
}

/* 底部信息 */
.brand-footer {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px 20px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.brand-footer p { margin: 4px 0; }

/* ===== 右侧主内容区 ===== */
.home-main {
  flex: 1;
  min-width: 0;
}

.section-title {
  font-size: 1.3rem;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--vp-c-brand);
}

/* 文章列表 — 对标 patent5.com 的列表风格 */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
  font-size: 0.95rem;
}

.post-date {
  color: var(--vp-c-text-3);
  font-size: 0.82rem;
  white-space: nowrap;
  min-width: 85px;
}

.post-category {
  font-size: 0.75rem;
  padding: 1px 8px;
  border: 1px solid;
  border-radius: 10px;
  white-space: nowrap;
}

.post-link {
  text-decoration: none;
  transition: color 0.2s;
  flex: 1;
}

.post-link:hover { color: var(--vp-c-brand); }

/* 底部欢迎信息 */
.home-footer-info {
  margin-top: 40px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

.home-footer-info p { margin: 4px 0; }

/* ===== 响应式：小屏折叠为单栏 ===== */
@media (max-width: 768px) {
  .home-wrapper {
    flex-direction: column;
    padding: 16px;
  }
  .home-sidebar { width: 100%; }
}
</style>
