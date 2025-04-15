<template>
  <el-dialog
    v-model="dialogVisible"
    :title="detailData.title"
    width="70%"
    top="5vh"
    :destroy-on-close="true"
    :close-on-click-modal="true"
    :custom-class="'theme-dialog ' + (store.theme === 'dark' ? 'dark-theme' : '')"
  >
    <div class="detail-content">
      <div v-if="detailData.image" class="detail-image">
        <img :src="detailData.image" :alt="detailData.title">
      </div>
      <div class="detail-text">
        <p v-if="detailData.description" class="detail-description">{{ detailData.description }}</p>
        
        <div v-if="detailData.list && detailData.list.length" class="detail-list">
          <h4>{{ detailData.listTitle || '详情' }}</h4>
          <ul>
            <li v-for="(item, index) in detailData.list" :key="index">{{ item }}</li>
          </ul>
        </div>
        
        <div v-if="detailData.content" class="detail-content-text" v-html="detailData.content"></div>
        
        <div v-if="detailData.subSections && detailData.subSections.length" class="detail-subsections">
          <div v-for="(section, index) in detailData.subSections" :key="index" class="subsection">
            <h4>{{ section.title }}</h4>
            <p v-if="section.description">{{ section.description }}</p>
            <ul v-if="section.items && section.items.length">
              <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import { store } from '../data/store';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  detailData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['update:visible']);

const dialogVisible = ref(props.visible);

// 监听dialogVisible变化
watch(dialogVisible, (newVal) => {
  emit('update:visible', newVal);
});

// 监听props变化
watch(() => props.visible, (newVal) => {
  dialogVisible.value = newVal;
});
</script>

<style>
/* 全局对话框主题样式 */
.theme-dialog {
  border-radius: 8px;
  overflow: hidden;
}

.theme-dialog .el-dialog__header {
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 15px 20px;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s, color 0.3s;
}

.theme-dialog .el-dialog__title {
  color: var(--text-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.theme-dialog .el-dialog__headerbtn {
  top: 15px;
}

.theme-dialog .el-dialog__headerbtn .el-dialog__close {
  color: var(--text-color);
}

.theme-dialog .el-dialog__body {
  background-color: var(--section-bg);
  color: var(--text-color);
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

/* 暗色主题特定样式 */
.dark-theme .el-dialog__header {
  background-color: var(--card-bg);
}

.dark-theme .el-dialog__title {
  color: var(--text-color);
}

.dark-theme .el-dialog__headerbtn .el-dialog__close {
  color: var(--text-color);
}

.dark-theme .el-dialog__body {
  background-color: var(--section-bg);
  color: var(--text-color);
}
</style>

<style scoped>
.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-image {
  max-height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.detail-image img {
  width: 100%;
  object-fit: cover;
}

.detail-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.detail-list {
  margin-bottom: 1.5rem;
}

.detail-list h4 {
  margin-bottom: 0.8rem;
  color: var(--text-color);
  font-size: 1.2rem;
}

.detail-list ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.detail-list li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: var(--text-color);
}

.detail-content-text {
  line-height: 1.6;
  color: var(--text-color);
}

.detail-content-text p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.detail-subsections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.subsection {
  background-color: var(--card-bg);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: background-color 0.3s;
}

.subsection h4 {
  margin-bottom: 0.8rem;
  color: var(--text-color);
}

.subsection p {
  color: var(--text-color);
  margin-bottom: 0.8rem;
}

.subsection ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.subsection li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

@media (min-width: 768px) {
  .detail-content {
    flex-direction: row;
  }
  
  .detail-image {
    flex: 0 0 40%;
    max-height: 400px;
    margin-bottom: 0;
  }
  
  .detail-text {
    flex: 1;
    padding-left: 1.5rem;
  }
}
</style> 