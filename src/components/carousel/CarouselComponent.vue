<template>
  <div class="carousel-container">
    <el-carousel :interval="5000" arrow="always" height="400px">
      <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
        <img :src="item.url" :alt="item.alt" class="carousel-image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 轮播图数据
const carouselImages = ref([
  { url: '/image/meaning1.jpg', alt: '海上丝绸之路示意图' },
  { url: '/image/lu.jpg', alt: '海上丝绸之路路线图' },
  { url: '/image/hai.jpg', alt: '海上贸易图' },
  { url: '/image/home.jpg', alt: '文化遗产图' }
]);
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 自定义轮播图指示器样式 */
:deep(.el-carousel__indicators) {
  transform: translateY(16px);
}

:deep(.el-carousel__indicator) {
  padding: 12px 4px;
}

:deep(.el-carousel__indicator--active .el-carousel__button) {
  background-color: #409eff;
}

:deep(.el-carousel__arrow) {
  background-color: rgba(31, 45, 61, 0.5);
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  text-align: center;
  font-size: 12px;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
</style>