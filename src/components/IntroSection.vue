<template>
  <section class="intro">
    <h2>历史背景</h2>
    <div class="intro-content">
      <div class="intro-text">
        <p>岭南海上丝绸之路是中国古代重要的海上贸易通道，始于秦汉，兴于唐宋，延续至明清。这条海上商路连接了中国与世界，促进了东西方文明的交流与融合。岭南地区凭借其独特的地理位置和丰富的物产资源，成为海上丝绸之路的重要枢纽。</p>
        <p>作为中国古代对外贸易的重要通道，海上丝绸之路不仅促进了经济繁荣，更推动了文化、科技、宗教等多领域的交流，对世界文明的发展产生了深远影响。</p>
      </div>
      <div class="intro-image">
        <CarouselComponent />
      </div>
    </div>
    <!-- 地图部分已集成到轮播图中 -->
  </section>
</template>

<script setup>
// 导入轮播图组件
import CarouselComponent from './carousel/CarouselComponent.vue';
</script>

<style scoped>
/* 介绍部分样式 */
.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.intro-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-image img {
  width: 100%;
  max-width: 550px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 地图容器样式 */
.map-container {
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.map-placeholder {
  height: 500px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.map-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-placeholder p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  margin: 0;
}

/* 地图放大功能样式 */
.zoomable-image {
  transition: transform 0.3s ease;
}

.zoomable-image.zoomed {
  transform: scale(1.5);
  cursor: zoom-out;
}
</style>