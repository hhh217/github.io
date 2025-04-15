<template>
  <header>
    <nav class="nav-container">
      <div class="logo">丝路文化</div>
      <div class="nav-links">
        <a href="#app" class="nav-link" @click="scrollToSection($event, 'app')">首页</a>
        <a href="#intro" class="nav-link" @click="scrollToSection($event, 'intro')">历史背景</a>
        <a href="#video" class="nav-link" @click="scrollToSection($event, 'video')">影像资料</a>
        <a href="#heritage" class="nav-link" @click="scrollToSection($event, 'heritage')">文化遗产</a>
        <a href="#modern" class="nav-link" @click="scrollToSection($event, 'modern')">现代意义</a>
        <a href="#quiz" class="nav-link" @click="scrollToSection($event, 'quiz')">知识测验</a>
      </div>
    </nav>
    <div class="header-spacer"></div>
  </header>
</template>

<script setup>
// 导航链接点击处理
const scrollToSection = (event, targetId) => {
  event.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
header {
  color: var(--text-color);
  position: relative;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--header-bg);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px var(--shadow-color);
  color: var(--accent-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--accent-color);
}

.header-spacer {
  height: 70px; /* 与导航栏高度相匹配，确保内容不被导航栏遮挡 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0.8rem 1.5rem;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .header-spacer {
    height: 100px; /* 为响应式布局调整空间高度 */
  }
}
</style>