<script setup>
import Header from './components/Header.vue'
import IntroSection from './components/IntroSection.vue'
import VideoSection from './components/VideoSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import HeritageSection from './components/HeritageSection.vue'
import ModernSection from './components/ModernSection.vue'
import QuizSection from './components/QuizSection.vue'
import DetailPopup from './components/DetailPopup.vue'
import HomeCarousel from './components/carousel/HomeCarousel.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { store } from './data/store'
import { ArrowUpBold } from '@element-plus/icons-vue'
import { onMounted } from 'vue'

// 初始化应用时设置主题
onMounted(() => {
  document.documentElement.setAttribute('data-theme', store.theme);
});
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <HomeCarousel style="margin-bottom: 20px;"/>
      <IntroSection id="intro" />
      <VideoSection id="video" />
      <TimelineSection id="timeline" />
      <FeaturesSection id="features" />
      <HeritageSection id="heritage" />
      <ModernSection id="modern" />
      <QuizSection id="quiz" />
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <span class="silk-road-text">丝路文化</span>
        </div>
        <div class="footer-info">
          <p>© 2023-2024 岭南海上丝绸之路 - 文化传承与现代意义</p>
          <p class="footer-slogan">传承文明 · 连接世界 · 共创未来</p>
        </div>
        <div class="footer-links">
          <a href="#intro" class="footer-link">关于我们</a>
          <a href="#video" class="footer-link">影像资料</a>
          <a href="#heritage" class="footer-link">文化遗产</a>
          <a href="#modern" class="footer-link">现代意义</a>
          <a href="#quiz" class="footer-link">知识测验</a>
        </div>
      </div>
    </footer>
    <el-backtop :right="40" :bottom="40" :visibility-height="300">
      <div class="back-to-top">
        <el-icon><ArrowUpBold /></el-icon>
      </div>
    </el-backtop>
    
    <!-- 主题切换按钮 -->
    <div class="theme-toggle-wrapper">
      <ThemeToggle />
    </div>
    
    <!-- 详情弹窗 -->
    <DetailPopup 
      v-model:visible="store.detailPopup.visible" 
      :detail-data="store.detailPopup.currentDetail || {}" 
    />
  </div>
</template>

<style>
/* 主题变量定义 */
:root {
  /* 亮色主题变量 */
  --bg-color: #f5f5f5;
  --text-color: #333;
  --section-bg: #ffffff;
  --card-bg: #f8f9fa;
  --header-bg: #ffffff;
  --footer-bg: #333;
  --footer-text: #ffffff;
  --border-color: #dee2e6;
  --accent-color: #e55039;
  --accent-hover: #f8c291;
  --timeline-color: #3498db;
  --timeline-color-rgb: 52, 152, 219; /* 添加RGB值用于透明度 */
  --timeline-bg: rgba(52, 152, 219, 0.05);
  --toggle-bg-color: #f0f0f0;
  --toggle-color: #333;
  --toggle-hover-bg: #e0e0e0;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

/* 暗色主题变量 */
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  --section-bg: #242424;
  --card-bg: #2c2c2c;
  --header-bg: #242424;
  --footer-bg: #121212;
  --footer-text: #e0e0e0;
  --border-color: #444;
  --accent-color: #ff7a5c;
  --accent-hover: #ff9a7f;
  --timeline-color: #5dade2;
  --timeline-color-rgb: 93, 173, 226; /* 添加RGB值用于透明度 */
  --timeline-bg: rgba(93, 173, 226, 0.1);
  --toggle-bg-color: #333;
  --toggle-color: #f0f0f0;
  --toggle-hover-bg: #444;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "SimSun", serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  min-height: 100vh;
  margin: 0;
  scroll-behavior: smooth;
  transition: background-color 0.3s, color 0.3s;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
}

section {
  margin-bottom: 4rem;
  background: var(--section-bg);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: background-color 0.3s, box-shadow 0.3s;
}

h2 {
  font-size: 2.2rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(to right, var(--accent-hover), var(--accent-color));
}

footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  text-align: center;
  padding: 2rem 1.5rem;
  margin-top: auto;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 -2px 10px var(--shadow-color);
  transition: background-color 0.3s, color 0.3s;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 1.5rem;
}

.footer-logo {
  margin-bottom: 0.5rem;
}

.silk-road-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--accent-color);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.footer-info p {
  margin: 0.5rem 0;
}

.footer-slogan {
  font-style: italic;
  color: var(--accent-hover);
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: var(--footer-text);
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
  padding: 0.3rem 0;
}

.footer-link:hover {
  color: var(--accent-color);
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--accent-color);
  transition: width 0.3s;
}

.footer-link:hover::after {
  width: 100%;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    text-align: left;
    padding: 0 4%;
  }
  
  .footer-logo {
    flex: 1;
  }
  
  .footer-info {
    flex: 2;
    text-align: center;
  }
  
  .footer-links {
    flex: 1;
    justify-content: flex-end;
  }
}

@media (max-width: 767px) {
  .footer-links {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .footer-info {
    width: 100%;
  }
}

.back-to-top {
  height: 100%;
  width: 100%;
  background-color: var(--accent-color);
  box-shadow: 0 0 6px var(--shadow-color);
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.back-to-top:hover {
  background-color: var(--accent-hover);
}

/* 可点击样式 */
.clickable {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.clickable:hover {
  color: var(--accent-color);
}

.clickable::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.clickable:hover::after {
  width: 100%;
}

/* 自定义链接样式 */
.custom-link {
  color: var(--accent-color);
  text-decoration: none;
  position: relative;
}

.custom-link::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.custom-link:hover::after {
  width: 100%;
}

/* 主题切换按钮样式 */
.theme-toggle-wrapper {
  position: fixed;
  bottom: 100px;
  right: 40px;
  z-index: 999;
}
</style>
