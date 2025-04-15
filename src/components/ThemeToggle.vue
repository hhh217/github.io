<template>
  <div class="theme-toggle" @click="toggleTheme" :title="theme === 'light' ? '切换到夜间模式' : '切换到日间模式'">
    <el-icon v-if="theme === 'light'"><Moon /></el-icon>
    <el-icon v-else><Sunny /></el-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Moon, Sunny } from '@element-plus/icons-vue';
import { store } from '../data/store';

// 当前主题
const theme = computed(() => store.theme);

// 切换主题
const toggleTheme = () => {
  store.toggleTheme();
};
</script>

<style scoped>
.theme-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--toggle-bg-color);
  color: var(--toggle-color);
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.theme-toggle:hover {
  background-color: var(--toggle-hover-bg);
}

.theme-toggle .el-icon {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .el-icon {
  transform: rotate(30deg);
}
</style> 