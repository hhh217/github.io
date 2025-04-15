import { reactive } from 'vue';
import { detailsData } from './detailsData';
import { ElMessage } from 'element-plus';

// 获取本地存储的主题设置
const getStoredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme === 'dark' ? 'dark' : 'light';
};

// 获取本地存储的评分数据
const getStoredRatings = () => {
  const storedRatings = localStorage.getItem('ratings');
  return storedRatings ? JSON.parse(storedRatings) : {
    qinHan: 0,
    tangSong: 0,
    mingQing: 0,
    ports: 0,
    goods: 0, 
    culture: 0,
    sites: 0,
    heritage: 0
  };
};

// 全局状态存储
export const store = reactive({
  // 主题设置
  theme: getStoredTheme(),
  
  // 评分数据
  ratings: getStoredRatings(),
  
  // 详情弹窗
  detailPopup: {
    visible: false,
    currentDetail: null
  },
  
  // 显示详情弹窗
  showDetail(key) {
    if (detailsData[key]) {
      this.detailPopup.currentDetail = detailsData[key];
      this.detailPopup.visible = true;
    } else {
      console.error('未找到详情数据:', key);
    }
  },
  
  // 关闭详情弹窗
  closeDetail() {
    this.detailPopup.visible = false;
    this.detailPopup.currentDetail = null;
  },
  
  // 切换主题
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  
  // 设置评分
  setRating(key, value) {
    this.ratings[key] = value;
    localStorage.setItem('ratings', JSON.stringify(this.ratings));
    ElMessage({
      message: '感谢您的评价！',
      type: 'success',
      duration: 2000
    });
  }
}); 