<template>
  <section class="video-section">
    <h2>海上丝绸之路影像</h2>
    <div class="video-container">
      <el-card class="video-card">
        <div class="video-wrapper">
          <video 
            ref="videoPlayer" 
            controls 
            class="video-player"
            :src="videoSource"
            poster="/image/video-poster.jpg"

          >
            您的浏览器不支持HTML5视频播放
          </video>
        </div>
        <div class="video-description">
          <h3>海上丝绸之路纪实</h3>
          <p>本视频讲述了古代海上丝绸之路的形成和发展历程，展示了岭南地区与海上丝绸之路的深厚联系，以及其对历史、文化和经济的重要影响。</p>
          <div class="video-controls">
            <el-button type="primary" @click="playVideo" :disabled="isPlaying">
              <el-icon class="control-icon"><VideoPlay /></el-icon> 播放
            </el-button>
            <el-button @click="pauseVideo" :disabled="!isPlaying">
              <el-icon class="control-icon"><VideoPause /></el-icon> 暂停
            </el-button>
            <el-button @click="restartVideo">
              <el-icon class="control-icon"><RefreshRight /></el-icon> 重新播放
            </el-button>
          </div>
        </div>
      </el-card>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VideoPlay, VideoPause, RefreshRight } from '@element-plus/icons-vue';

// 视频源
const videoSource = '/video/video.mp4';
// 视频播放器引用
const videoPlayer = ref(null);
// 是否正在播放
const isPlaying = ref(false);

// 监听视频播放状态变化
onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.addEventListener('play', () => {
      isPlaying.value = true;
    });
    
    videoPlayer.value.addEventListener('pause', () => {
      isPlaying.value = false;
    });
    
    videoPlayer.value.addEventListener('ended', () => {
      isPlaying.value = false;
    });
  }
});

// 播放视频
const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play();
  }
};

// 暂停视频
const pauseVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
  }
};

// 重新播放视频
const restartVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.currentTime = 0;
    videoPlayer.value.play();
  }
};
</script>

<style scoped>
.video-section {
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0;
}

.video-card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px var(--shadow-color);
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9宽高比 */
  overflow: hidden;
  background-color: #000;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.video-description {
  padding: 1.5rem;
  color: var(--text-color);
}

.video-description h3 {
  margin-bottom: 1rem;
  color: var(--text-color);
  font-size: 1.3rem;
}

.video-description p {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  line-height: 1.6;
}

.video-controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.control-icon {
  margin-right: 0.2rem;
}

@media (max-width: 768px) {
  .video-controls {
    justify-content: center;
  }
  
  .video-description {
    text-align: center;
  }
}
</style> 