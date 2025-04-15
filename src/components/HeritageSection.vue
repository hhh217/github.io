<template>
  <section class="heritage">
    <h2>遗产文化</h2>
    <div class="heritage-grid">
      <div class="heritage-item">
        <div class="heritage-image clickable" @click="showDetail('sites')">
          <img src="/image/YZ.jpg" alt="历史遗迹">
        </div>
        <h3 class="clickable" @click="showDetail('sites')">历史遗迹</h3>
        <ul>
          <li>广州十三行遗址</li>
          <li>泉州古港遗址</li>
          <li>南海神庙</li>
          <li>光孝寺</li>
          <li>六榕寺</li>
          <li>怀圣寺</li>
        </ul>
        <div class="heritage-description">
          <p>这些历史遗迹证明了海上丝绸之路的繁荣，是研究古代海上贸易的重要实物资料。</p>
        </div>
        <div class="rating-container">
          <div class="rating-label">你的评分：</div>
          <el-rate
            v-model="ratings.sites"
            :colors="rateColors"
            show-score
            @change="value => rateItem('sites', value)"
          />
        </div>
        <div class="more-link">
          <span class="custom-link" @click="showDetail('sites')">查看详情</span>
        </div>
      </div>
      <div class="heritage-item">
        <div class="heritage-image clickable" @click="showDetail('heritage')">
          <img src="/image/home.jpg" alt="非物质文化遗产">
        </div>
        <h3 class="clickable" @click="showDetail('heritage')">非物质文化遗产</h3>
        <ul>
          <li>广绣技艺</li>
          <li>岭南建筑艺术</li>
          <li>海上贸易习俗</li>
          <li>港口文化</li>
          <li>造船技艺</li>
          <li>航海技术</li>
        </ul>
        <div class="heritage-description">
          <p>这些非物质文化遗产承载着海上丝绸之路的文化记忆，展现了古代航海文明的智慧。</p>
        </div>
        <div class="rating-container">
          <div class="rating-label">你的评分：</div>
          <el-rate
            v-model="ratings.heritage"
            :colors="rateColors"
            show-score
            @change="value => rateItem('heritage', value)"
          />
        </div>
        <div class="more-link">
          <span class="custom-link" @click="showDetail('heritage')">查看详情</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { store } from '../data/store';

// 评分数据
const ratings = computed(() => store.ratings);

// 评分颜色
const rateColors = ['#99A9BF', '#F7BA2A', '#FF9900'];

// 显示详情弹窗
const showDetail = (key) => {
  store.showDetail(key);
};

// 评分处理
const rateItem = (key, value) => {
  store.setRating(key, value);
};
</script>

<style scoped>
/* 遗产文化样式 */
.heritage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.heritage-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.heritage-item:hover {
  transform: translateY(-5px);
}

.heritage-image {
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  height: 200px;
  overflow: hidden;
}

.heritage-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.heritage-image:hover img {
  transform: scale(1.05);
}

.heritage-item h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.heritage-item ul {
  list-style: none;
}

.heritage-item li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
}

.heritage-description {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-style: italic;
  color: var(--text-color);
}

/* 评分容器样式 */
.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  padding: 0.8rem;
  background-color: var(--section-bg);
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--shadow-color);
}

.rating-label {
  color: var(--text-color);
  font-weight: 500;
}

/* "查看详情"链接样式 */
.more-link {
  margin-top: 1rem;
  text-align: right;
}
</style>