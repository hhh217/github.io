<template>
  <section class="timeline">
    <h2>历史发展</h2>
    <div class="timeline-item" @click="toggleItem(0)">
      <div class="timeline-header">
        <div class="timeline-image">
          <img src="/image/han.jpg" alt="秦汉时期">
        </div>
        <div class="timeline-title">
          <h3 class="clickable" @click.stop="showDetail('qinHan')">秦汉时期</h3>
          <div class="toggle-icon" :class="{ 'is-active': expandedItems[0] }">
            <el-icon><ArrowDown /></el-icon>
          </div>
        </div>
      </div>
      <div class="timeline-content" :class="{ 'is-expanded': expandedItems[0] }">
        <p>海上丝绸之路初步形成，岭南地区开始与海外贸易往来。汉武帝时期，派遣张骞出使西域，同时开通海上贸易路线。</p>
        <ul class="timeline-details">
          <li>公元前111年：汉武帝平定南越，设立南海郡</li>
          <li>东汉时期：与东南亚、南亚地区建立贸易往来</li>
          <li>海上贸易初步发展</li>
          <li>港口设施开始建设</li>
        </ul>
        <div class="rating-container">
          <div class="rating-label">你的评分：</div>
          <el-rate
            v-model="ratings.qinHan"
            :colors="rateColors"
            show-score
            @change="value => rateItem('qinHan', value)"
            @click.stop
          />
        </div>
        <div class="more-link">
          <span class="custom-link" @click.stop="showDetail('qinHan')">查看详情</span>
        </div>
      </div>
    </div>
    <div class="timeline-item" @click="toggleItem(1)">
      <div class="timeline-header">
        <div class="timeline-image">
          <img src="/image/Tang.jpg" alt="唐宋时期">
        </div>
        <div class="timeline-title">
          <h3 class="clickable" @click.stop="showDetail('tangSong')">唐宋时期</h3>
          <div class="toggle-icon" :class="{ 'is-active': expandedItems[1] }">
            <el-icon><ArrowDown /></el-icon>
          </div>
        </div>
      </div>
      <div class="timeline-content" :class="{ 'is-expanded': expandedItems[1] }">
        <p>海上贸易达到鼎盛，广州成为重要的对外贸易港口。唐朝设立市舶司管理对外贸易，宋朝时期海上贸易更加繁荣。</p>
        <ul class="timeline-details">
          <li>唐朝：设立市舶司，管理对外贸易</li>
          <li>宋朝：广州港成为"东方第一大港"</li>
          <li>海上贸易税收成为国家重要收入来源</li>
          <li>造船技术显著提升</li>
          <li>对外贸易制度完善</li>
        </ul>
        <div class="rating-container">
          <div class="rating-label">你的评分：</div>
          <el-rate
            v-model="ratings.tangSong"
            :colors="rateColors"
            show-score
            @change="value => rateItem('tangSong', value)"
            @click.stop
          />
        </div>
        <div class="more-link">
          <span class="custom-link" @click.stop="showDetail('tangSong')">查看详情</span>
        </div>
      </div>
    </div>
    <div class="timeline-item" @click="toggleItem(2)">
      <div class="timeline-header">
        <div class="timeline-image">
          <img src="/image/Ming.jpg" alt="明清时期">
        </div>
        <div class="timeline-title">
          <h3 class="clickable" @click.stop="showDetail('mingQing')">明清时期</h3>
          <div class="toggle-icon" :class="{ 'is-active': expandedItems[2] }">
            <el-icon><ArrowDown /></el-icon>
          </div>
        </div>
      </div>
      <div class="timeline-content" :class="{ 'is-expanded': expandedItems[2] }">
        <p>海上丝绸之路继续发展，与西方国家的贸易往来更加频繁。明朝郑和下西洋是这一时期的重要事件。</p>
        <ul class="timeline-details">
          <li>1405-1433年：郑和七下西洋</li>
          <li>清朝：设立十三行，管理对外贸易</li>
          <li>广州成为重要的对外贸易口岸</li>
          <li>西方科技文化传入</li>
          <li>贸易规模进一步扩大</li>
        </ul>
        <div class="rating-container">
          <div class="rating-label">你的评分：</div>
          <el-rate
            v-model="ratings.mingQing"
            :colors="rateColors"
            show-score
            @change="value => rateItem('mingQing', value)"
            @click.stop
          />
        </div>
        <div class="more-link">
          <span class="custom-link" @click.stop="showDetail('mingQing')">查看详情</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import { store } from '../data/store';

// 跟踪每个时间点的展开/收起状态
const expandedItems = ref([false, false, false]);

// 评分数据
const ratings = computed(() => store.ratings);

// 评分颜色
const rateColors = ['#99A9BF', '#F7BA2A', '#FF9900'];

// 切换时间点的展开/收起状态
const toggleItem = (index) => {
  expandedItems.value[index] = !expandedItems.value[index];
};

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
/* 时间线样式 */
.timeline {
  position: relative;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 2rem;
  border-left: 3px solid var(--timeline-color);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  background-color: var(--timeline-bg);
}

.timeline-header {
  display: flex;
  flex-direction: column;
}

.timeline-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.timeline-image {
  margin: -2rem -2rem 1rem -2rem;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.timeline-item:hover .timeline-image img {
  transform: scale(1.05);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--timeline-color);
}

.timeline-item h3 {
  color: var(--text-color);
  margin-bottom: 0;
  flex: 1;
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(var(--timeline-color-rgb), 0.2);
  color: var(--timeline-color);
  transition: all 0.3s ease;
}

.toggle-icon.is-active {
  transform: rotate(180deg);
  background-color: var(--timeline-color);
  color: var(--section-bg);
}

.timeline-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease, margin 0.3s ease;
  opacity: 0;
  margin-top: 0;
}

.timeline-content.is-expanded {
  max-height: 500px;
  opacity: 1;
  margin-top: 1rem;
}

.timeline-details {
  list-style: none;
  margin-top: 1rem;
}

.timeline-details li {
  padding: 0.3rem 0;
  color: var(--text-color);
  position: relative;
  padding-left: 1.2rem;
}

.timeline-details li:before {
  content: '•';
  color: var(--timeline-color);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  line-height: 1;
}

/* 评分容器样式 */
.rating-container {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(var(--timeline-color-rgb), 0.05);
  border-radius: 4px;
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