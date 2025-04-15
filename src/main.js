import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入Element Plus样式和组件
import 'element-plus/dist/index.css'
import { 
  ElDialog, 
  ElBacktop, 
  ElIcon, 
  ElCarousel, 
  ElCarouselItem, 
  ElRate, 
  ElMessage, 
  ElProgress, 
  ElRadio, 
  ElRadioGroup, 
  ElButton,
  ElCard
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册Element Plus组件
app.use(ElDialog)
app.use(ElBacktop)
app.use(ElIcon)
app.use(ElCarousel)
app.use(ElCarouselItem)
app.use(ElRate)
app.use(ElMessage)
app.use(ElProgress)
app.use(ElRadio)
app.use(ElRadioGroup)
app.use(ElButton)
app.use(ElCard)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
