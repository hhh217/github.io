<template>
  <section class="features">
    <div class="feature-card">
      <h3 class="clickable" @click="showDetail('ports')">重要港口</h3>
      <div class="feature-image clickable" @click="showDetail('ports')">
        <img src="/image/gangko.jpg" alt="古代港口">
      </div>
      <p>广州、泉州、宁波等港口是海上丝绸之路的重要节点，见证了无数商船的往来。其中广州港作为"东方第一大港"，在唐宋时期尤为繁荣。</p>
      <ul class="port-list">
        <li>广州港：唐宋时期最重要的对外贸易港口</li>
        <li>泉州港：宋元时期"东方第一大港"</li>
        <li>宁波港：明清时期重要的对外贸易口岸</li>
      </ul>
      <div class="port-details">
        <h4>港口特色</h4>
        <ul>
          <li>完善的港口设施</li>
          <li>发达的造船技术</li>
          <li>繁荣的商贸活动</li>
          <li>多元的文化交融</li>
        </ul>
      </div>
      <div class="rating-box">
        <div class="rating-label">你的评分：</div>
        <el-rate
          v-model="ratings.ports"
          :colors="rateColors"
          show-score
          @change="value => rateItem('ports', value)"
        />
      </div>
      <div class="more-link">
        <span class="custom-link" @click="showDetail('ports')">了解更多</span>
      </div>
    </div>
    <div class="feature-card">
      <h3 class="clickable" @click="showDetail('goods')">贸易商品</h3>
      <div class="feature-image clickable" @click="showDetail('goods')">
        <img src="/image/sp.png" alt="古代贸易商品">
      </div>
      <p>丝绸、瓷器、茶叶等中国特产远销海外，同时带回香料、宝石等异域珍品。这些商品不仅促进了经济交流，也推动了文化传播。</p>
      <div class="trade-items">
        <div class="trade-item">
          <h4>出口商品</h4>
          <ul>
            <li>丝绸：精美的中国丝绸深受海外欢迎</li>
            <li>瓷器：青花瓷、龙泉青瓷等名贵瓷器</li>
            <li>茶叶：中国茶文化远播海外</li>
            <li>漆器：精美的漆器工艺品</li>
            <li>铜器：青铜器、铜镜等</li>
          </ul>
        </div>
        <div class="trade-item">
          <h4>进口商品</h4>
          <ul>
            <li>香料：胡椒、丁香、肉桂等</li>
            <li>宝石：珍珠、珊瑚、玛瑙等</li>
            <li>药材：沉香、檀香等名贵药材</li>
            <li>玻璃器皿：精美的玻璃制品</li>
            <li>纺织品：波斯锦缎等</li>
          </ul>
        </div>
      </div>
      <div class="rating-box">
        <div class="rating-label">你的评分：</div>
        <el-rate
          v-model="ratings.goods"
          :colors="rateColors"
          show-score
          @change="value => rateItem('goods', value)"
        />
      </div>
      <div class="more-link">
        <span class="custom-link" @click="showDetail('goods')">了解更多</span>
      </div>
    </div>
    <div class="feature-card">
      <h3 class="clickable" @click="showDetail('culture')">文化交流</h3>
      <div class="feature-image clickable" @click="showDetail('culture')">
        <img src="/image/crucial.jpg" alt="文化交流">
      </div>
      <p>通过海上贸易，促进了宗教、艺术、科技等多领域的交流。岭南地区成为多元文化交融的重要窗口。</p>
      <div class="culture-aspects">
        <div class="culture-item">
          <h4>宗教传播</h4>
          <p>佛教、伊斯兰教等宗教通过海上丝绸之路传入中国</p>
          <ul>
            <li>佛教寺庙的建立</li>
            <li>伊斯兰教清真寺的兴建</li>
            <li>宗教艺术的传播</li>
          </ul>
        </div>
        <div class="culture-item">
          <h4>艺术交流</h4>
          <p>建筑、音乐、绘画等艺术形式相互影响</p>
          <ul>
            <li>建筑风格的融合</li>
            <li>音乐艺术的交流</li>
            <li>绘画技法的借鉴</li>
          </ul>
        </div>
        <div class="culture-item">
          <h4>科技传播</h4>
          <p>航海技术、天文历法、医药知识等相互借鉴</p>
          <ul>
            <li>航海技术的进步</li>
            <li>天文历法的完善</li>
            <li>医药知识的交流</li>
          </ul>
        </div>
      </div>
      <div class="rating-box">
        <div class="rating-label">你的评分：</div>
        <el-rate
          v-model="ratings.culture"
          :colors="rateColors"
          show-score
          @change="value => rateItem('culture', value)"
        />
      </div>
      <div class="more-link">
        <span class="custom-link" @click="showDetail('culture')">了解更多</span>
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
/* 特色卡片样式 */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s;
  border: 1px solid var(--border-color);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-image {
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  height: 200px;
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-top: 10px;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-image img {
  transform: scale(1.05);
}

.feature-card h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

/* 港口列表样式 */
.port-list {
  list-style: none;
  margin-top: 1rem;
}

.port-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.port-details {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.port-details ul {
  list-style: none;
  margin-top: 0.5rem;
}

.port-details li {
  padding: 0.3rem 0;
  color: var(--text-color);
}

/* 贸易商品样式 */
.trade-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.trade-item h4 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.trade-item ul {
  list-style: none;
}

.trade-item li {
  padding: 0.3rem 0;
  color: var(--text-color);
}

/* 文化交流样式 */
.culture-aspects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.culture-item {
  background: var(--section-bg);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px var(--shadow-color);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.culture-item h4 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.culture-item p {
  color: var(--text-color);
}

.culture-item ul {
  list-style: none;
  margin-top: 0.5rem;
}

.culture-item li {
  padding: 0.3rem 0;
  color: var(--text-color);
}

/* 评分框样式 */
.rating-box {
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

/* "了解更多"链接样式 */
.more-link {
  margin-top: 1rem;
  text-align: right;
}
</style>