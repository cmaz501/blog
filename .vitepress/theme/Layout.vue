<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout: DefaultLayout } = DefaultTheme
const { site, frontmatter } = useData()
</script>

<template>
  <!-- 首页使用自定义布局，其余页面使用默认布局 -->
  <div v-if="frontmatter.layout === 'home'" class="custom-home">
    <!-- 顶部导航条 -->
    <header class="top-bar">
      <div class="top-bar-inner">
        <a href="/" class="logo">cmaz501</a>
        <nav class="top-nav">
          <a href="/">首页</a>
          <a href="/code/">💻 代码</a>
          <a href="/patent/">📜 专利</a>
          <a href="/philosophy/">🧠 哲学</a>
          <a href="/music/">🎵 音乐</a>
        </nav>
      </div>
    </header>

    <!-- 双栏主体 -->
    <div class="home-body">
      <!-- 左侧栏 -->
      <aside class="home-sidebar">
        <div class="sidebar-card brand-info">
          <div class="avatar-placeholder">cm</div>
          <h3>cmaz501</h3>
          <p class="tagline">代码 · 专利 · 哲学 · 音乐</p>
          <p class="subtitle">开迈科技 · 金石意象</p>
        </div>

        <nav class="sidebar-card nav-section">
          <h4>内容分类</h4>
          <a href="/code/" class="nav-link">
            <span class="nav-icon">💻</span>
            <span class="nav-text">代码</span>
            <span class="nav-badge">技术笔记</span>
          </a>
          <a href="/patent/" class="nav-link">
            <span class="nav-icon">📜</span>
            <span class="nav-text">专利</span>
            <span class="nav-badge">知识产权</span>
          </a>
          <a href="/philosophy/" class="nav-link">
            <span class="nav-icon">🧠</span>
            <span class="nav-text">哲学</span>
            <span class="nav-badge">思考札记</span>
          </a>
          <a href="/music/" class="nav-link">
            <span class="nav-icon">🎵</span>
            <span class="nav-text">音乐</span>
            <span class="nav-badge">听觉审美</span>
          </a>
        </nav>

        <div class="sidebar-card about-section">
          <h4>关于</h4>
          <p>TjayLeaf / cmaz501</p>
          <p>探索者 · 创造者 · 思想者</p>
          <p class="dim">—— 开迈科技 · 金石意象 ——</p>
        </div>
      </aside>

      <!-- 右侧内容 -->
      <main class="home-content">
        <slot />
      </main>
    </div>
  </div>

  <!-- 非首页统一用 VitePress 默认布局 -->
  <DefaultLayout v-else />
</template>

<style scoped>
/* ===== 顶部导航条 ===== */
.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.top-bar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #222;
  text-decoration: none;
}
.top-nav {
  display: flex;
  gap: 24px;
}
.top-nav a {
  font-size: 0.9rem;
  color: #555;
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}
.top-nav a:hover {
  color: #222;
  border-bottom-color: #333;
}

/* ===== 双栏主体 ===== */
.home-body {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  gap: 40px;
  min-height: calc(100vh - 56px);
}

.home-sidebar {
  width: 240px;
  flex-shrink: 0;
}

.sidebar-card {
  background: #f8f8f8;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 16px;
}

/* 品牌信息 */
.brand-info { text-align: center; }
.avatar-placeholder {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.brand-info h3 {
  margin: 0 0 4px;
  font-size: 1.1rem;
  color: #222;
}
.tagline {
  margin: 0;
  font-size: 0.82rem;
  color: #666;
}
.subtitle {
  margin: 4px 0 0;
  font-size: 0.75rem;
  color: #999;
}

/* 导航 */
.nav-section h4, .about-section h4 {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #999;
  margin: 0 0 12px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 0;
  text-decoration: none;
  font-size: 0.88rem;
  color: #444;
  border-bottom: 1px solid #eee;
  transition: color 0.15s;
}
.nav-link:last-child { border-bottom: none; }
.nav-link:hover { color: #000; }
.nav-icon { font-size: 0.9rem; width: 20px; }
.nav-text { flex: 1; }
.nav-badge {
  font-size: 0.7rem;
  color: #aaa;
  background: #f0f0f0;
  padding: 1px 7px;
  border-radius: 8px;
}

.about-section { font-size: 0.82rem; color: #666; }
.about-section p { margin: 3px 0; }
.dim { font-size: 0.75rem; color: #aaa; }

/* 右侧内容 */
.home-content {
  flex: 1;
  min-width: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .home-body {
    flex-direction: column;
    padding: 16px;
    gap: 24px;
  }
  .home-sidebar { width: 100%; }
  .top-nav { gap: 12px; }
  .top-nav a { font-size: 0.8rem; }
}
</style>
