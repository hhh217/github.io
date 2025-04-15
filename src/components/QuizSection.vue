<template>
  <section class="quiz-section">
    <h2>海上丝路知识问答</h2>
    <p class="quiz-intro">测试一下您对海上丝绸之路的了解程度！每题选择一个您认为正确的答案。</p>
    
    <div class="quiz-container">
      <div v-if="currentQuizIndex < quizData.length">
        <div class="quiz-card">
          <div class="quiz-progress">
            <span>问题 {{ currentQuizIndex + 1 }}/{{ quizData.length }}</span>
            <el-progress 
              :percentage="(currentQuizIndex / quizData.length) * 100" 
              :stroke-width="10" 
              :show-text="false"
              :color="progressColor"
            ></el-progress>
          </div>
          
          <div class="quiz-question">
            <h3>{{ currentQuiz.question }}</h3>
            <div class="quiz-options">
              <el-radio-group v-model="selectedAnswer" size="large">
                <div v-for="option in currentQuiz.options" :key="option.value" class="option-item">
                  <el-radio :label="option.value" :disabled="answered">
                    <span class="option-label">{{ option.value }}:</span> {{ option.label }}
                  </el-radio>
                </div>
              </el-radio-group>
            </div>
          </div>
          
          <div class="quiz-actions">
            <el-button 
              type="primary" 
              @click="checkAnswer" 
              :disabled="!selectedAnswer || answered" 
              round
            >
              提交答案
            </el-button>
            <el-button 
              v-if="answered" 
              @click="nextQuestion" 
              round
            >
              下一题
            </el-button>
          </div>
          
          <div v-if="answered" class="quiz-result" :class="isCorrect ? 'correct' : 'incorrect'">
            <div class="result-icon">
              <el-icon v-if="isCorrect"><Check /></el-icon>
              <el-icon v-else><CircleClose /></el-icon>
            </div>
            <div class="result-message">
              <h4>{{ isCorrect ? '回答正确！' : '回答错误！' }}</h4>
              <p>{{ currentQuiz.explanation }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 测验完成界面 -->
      <div v-else class="quiz-completed">
        <div class="completion-card">
          <el-icon class="completion-icon"><Trophy /></el-icon>
          <h3>测验完成！</h3>
          <p>您的得分: {{ score }}/{{ quizData.length }} ({{ Math.round(score/quizData.length*100) }}%)</p>
          <div class="completion-message">
            <template v-if="score === quizData.length">恭喜您全部答对！您是海上丝绸之路的专家！</template>
            <template v-else-if="score >= quizData.length * 0.8">很好！您对海上丝绸之路有很深的了解！</template>
            <template v-else-if="score >= quizData.length * 0.6">不错！您对海上丝绸之路有一定的了解。</template>
            <template v-else>继续努力！多了解海上丝绸之路的丰富历史和文化。</template>
          </div>
          <el-button type="primary" @click="restartQuiz" round>重新开始</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { quizData } from '../data/quizData.js';
import { Check, CircleClose, Trophy } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

// 当前问题索引
const currentQuizIndex = ref(0);
// 用户选择的答案
const selectedAnswer = ref('');
// 是否已回答
const answered = ref(false);
// 是否回答正确
const isCorrect = ref(false);
// 总分
const score = ref(0);

// 当前问题
const currentQuiz = computed(() => quizData[currentQuizIndex.value]);

// 进度条颜色
const progressColor = computed(() => {
  const percent = (currentQuizIndex.value / quizData.length) * 100;
  if (percent < 33) return '#409EFF';
  if (percent < 66) return '#67C23A';
  return '#E6A23C';
});

// 检查答案
const checkAnswer = () => {
  answered.value = true;
  isCorrect.value = selectedAnswer.value === currentQuiz.value.correctAnswer;
  
  if (isCorrect.value) {
    score.value++;
    ElMessage({
      message: '恭喜您，回答正确！',
      type: 'success',
      duration: 1500
    });
  } else {
    ElMessage({
      message: `正确答案是 ${currentQuiz.value.correctAnswer}`,
      type: 'error',
      duration: 1500
    });
  }
};

// 下一题
const nextQuestion = () => {
  currentQuizIndex.value++;
  selectedAnswer.value = '';
  answered.value = false;
  isCorrect.value = false;
  
  // 滚动到顶部
  const quizSection = document.querySelector('.quiz-section');
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// 重新开始测验
const restartQuiz = () => {
  currentQuizIndex.value = 0;
  selectedAnswer.value = '';
  answered.value = false;
  isCorrect.value = false;
  score.value = 0;
};
</script>

<style scoped>
.quiz-section {
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.quiz-intro {
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.1rem;
}

.quiz-container {
  max-width: 800px;
  margin: 0 auto;
}

.quiz-card {
  padding: 2rem;
  background-color: var(--section-bg);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: all 0.3s ease;
}

.quiz-progress {
  margin-bottom: 1.5rem;
}

.quiz-progress span {
  display: block;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.quiz-question h3 {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.quiz-options {
  margin-bottom: 2rem;
}

.option-item {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 4px;
}

.option-item:hover {
  background-color: var(--timeline-bg);
}

.option-label {
  font-weight: bold;
  color: var(--timeline-color);
  margin-right: 0.5rem;
}

.quiz-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.quiz-result {
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  animation: fadeIn 0.5s ease-in-out;
}

.quiz-result.correct {
  background-color: rgba(103, 194, 58, 0.1);
  border: 1px solid rgba(103, 194, 58, 0.3);
}

.quiz-result.incorrect {
  background-color: rgba(245, 108, 108, 0.1);
  border: 1px solid rgba(245, 108, 108, 0.3);
}

.result-icon {
  font-size: 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.result-icon :deep(svg) {
  font-size: 2.5rem;
}

.correct .result-icon {
  color: #67c23a;
}

.incorrect .result-icon {
  color: #f56c6c;
}

.result-message h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.result-message p {
  color: var(--text-color);
  margin-bottom: 0;
}

.quiz-completed {
  text-align: center;
}

.completion-card {
  padding: 3rem;
  background-color: var(--section-bg);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;
}

.completion-icon {
  font-size: 4rem;
  color: #e6a23c;
  margin-bottom: 1.5rem;
}

.completion-message {
  margin: 1.5rem 0;
  font-size: 1.1rem;
  color: var(--text-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 适配移动设备 */
@media (max-width: 768px) {
  .quiz-card {
    padding: 1.5rem;
  }
  
  .quiz-question h3 {
    font-size: 1.1rem;
  }
  
  .option-item {
    padding: 0.3rem;
  }
  
  .quiz-actions {
    flex-direction: column;
  }
  
  .completion-card {
    padding: 2rem;
  }
}
</style> 