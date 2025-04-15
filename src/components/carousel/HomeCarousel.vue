<template>
  <div class="home-carousel-container">
    <el-carousel :interval="3000" arrow="always" height="600px">
      <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
        <img :src="item.url" :alt="item.alt" class="carousel-image">
        <div class="carousel-caption">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 首页轮播图数据
const carouselImages = ref([
  {
    url: '/carousel-image/1.jpg',
    alt: '海上丝绸之路示意图',
    title: '海上丝绸之路',
    description: '连接东西方文明的黄金水道'
  },
  {
    url: '/carousel-image/2.jpg',
    alt: '海上丝绸之路路线图',
    title: '古代航线',
    description: '跨越大洋的贸易网络'
  },
  {
    url: '/carousel-image/3.webp',
    alt: '海上贸易图',
    title: '海上贸易',
    description: '促进文明交流的纽带'
  },
  {
    url: '/carousel-image/4.jpg',
    alt: '文化遗产图',
    title: '文化遗产',
    description: '见证历史的永恒印记'
  },
  {
    url: '/carousel-image/5.webp',
    alt: '海上丝绸之路示意图',
    title: '海上丝绸之路',
    description: '连接东西方文明的黄金水道'
  },
  {
    url: '/carousel-image/6.jpg',
    alt: '海上丝绸之路路线图',
    title: '古代航线',
    description: '跨越大洋的贸易网络'
  },
  {
    url: '/carousel-image/7.webp',
    alt: '文化遗产图',
    title: '文化遗产',
    description: '见证历史的永恒印记'
  }
]);
</script>

<style scoped>
.home-carousel-container {
  width: 100%;
  margin-bottom: 0;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 2rem;
  text-align: left;
}

.carousel-caption h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.carousel-caption p {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

/* 自定义轮播图指示器样式 */
:deep(.el-carousel__indicators) {
  transform: translateY(-20px);
}

:deep(.el-carousel__indicator) {
  padding: 12px 4px;
}

:deep(.el-carousel__indicator--active .el-carousel__button) {
  background-color: #fff;
}

:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  color: #fff;
  font-size: 22px;
  width: 48px;
  height: 48px;
  transition: background-color 0.3s;
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>