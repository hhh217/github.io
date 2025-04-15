<template>
  <section class="modern">
    <h2>现代意义</h2>
    <div class="modern-content">
      <div class="modern-image">
        <img src="/image/meaning.jpg" alt="现代海上贸易">
      </div>
      <div class="modern-points-grid">
        <div class="modern-point">
          <h3 class="point-title"><span class="number-badge">一</span>经济发展与开放合作</h3>
          <p class="point-lead">为广东等沿线地区带来新一轮改革开放机遇，推动"引进来"和"走出去"协调发展</p>
          <div class="point-content">
            <p>广东作为古代海上丝绸之路重要起点、全国外贸第一大省，可借助其历史优势：</p>
            <ul class="highlight-list">
              <li>建设粤港澳自由贸易区</li>
              <li>在沿线国家打造产业转移园/合作示范区</li>
              <li>带动产业转移与转型升级</li>
              <li>优化当地产业结构</li>
            </ul>
            <div class="data-card">
              <div class="data-item">
                <span class="data-value">3000+</span>
                <span class="data-label">海外合作项目</span>
              </div>
              <div class="data-item">
                <span class="data-value">160+</span>
                <span class="data-label">合作国家地区</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modern-point">
          <h3 class="point-title"><span class="number-badge">二</span>文化传承与辐射推广</h3>
          <div class="cultural-heritage">
            <div class="heritage-example">
              <p>广州十三行遗址</p>
            </div>
            <ul class="cultural-list">
              <li>打包申报世界文化遗产</li>
              <li>打造"广-潮-阳-徐"文旅品牌</li>
              <li>建设数字博物馆</li>
              <li>促进数字化保护展示</li>
            </ul>
          </div>
        </div>

        <div class="modern-point">
          <h3 class="point-title"><span class="number-badge">三</span>外交与和平发展</h3>
          <div class="diplomacy-content">
            <blockquote class="highlight-quote">
              "和平对话、合作共赢"
            </blockquote>
            <ul class="diplomacy-list">
              <li>构建中国-东盟命运共同体</li>
              <li>创新国际合作模式</li>
              <li>促进文明融合发展</li>
            </ul>
          </div>
        </div>

        <div class="modern-point">
          <h3 class="point-title"><span class="number-badge">四</span>侨乡纽带与国际联系</h3>
          <div class="overseas-stats">
            <div class="stat-item">
              <h4>3000万+</h4>
              <p>海外侨胞</p>
            </div>
            <div class="stat-item">
              <h4>160+</h4>
              <p>国家地区分布</p>
            </div>
          </div>
          <ul class="connection-list">
            <li>加强经济文化联系</li>
            <li>拓展国际合作网络</li>
            <li>提升国际影响力</li>
          </ul>
        </div>
      </div>
      <div class="modern-points">
        <div class="point">
          <h4>经济合作</h4>
          <p>促进区域经济一体化，加强贸易往来</p>
          <ul>
            <li>港口建设与发展</li>
            <li>贸易便利化</li>
            <li>产业合作</li>
            <li>金融合作</li>
            <li>基础设施</li>
            <li>跨境电商发展</li>
          </ul>
        </div>
        <div class="point">
          <h4>文化交流</h4>
          <p>增进文明互鉴，促进民心相通</p>
          <ul>
            <li>文化展览与交流</li>
            <li>教育合作</li>
            <li>旅游发展</li>
            <li>艺术交流</li>
            <li>学术研究</li>
            <li>文化遗产保护</li>
          </ul>
        </div>
        <div class="point">
          <h4>和平发展</h4>
          <p>推动构建人类命运共同体</p>
          <ul>
            <li>区域安全合作</li>
            <li>环境保护</li>
            <li>可持续发展</li>
            <li>海洋治理</li>
            <li>气候变化应对</li>
            <li>灾害防治</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 无需额外的脚本逻辑
</script>

<style scoped>
/* 现代意义样式 */
.modern-content {
  margin-top: 1.5rem;
}

.modern-image {
  margin: -2rem -2rem 1.5rem -2rem;
  height: 300px;
  overflow: hidden;
}

.modern-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modern-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.modern-point {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.modern-point:hover {
  transform: translateY(-5px);
}

.point-title {
  color: #2c5282;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.number-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  background: #3498db;
  color: white;
  border-radius: 50%;
  margin-right: 0.8rem;
  font-size: 1rem;
}

.point-lead {
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4a5568;
}

.highlight-list {
  list-style: none;
  margin: 1rem 0;
}

.highlight-list li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.highlight-list li:before {
  content: '✓';
  color: #38a169;
  position: absolute;
  left: 0;
}

.data-card {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.data-item {
  text-align: center;
}

.data-value {
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: #3498db;
}

.data-label {
  font-size: 0.9rem;
  color: #718096;
}

.cultural-heritage {
  margin-top: 1rem;
}

.heritage-example {
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;
}

.cultural-list {
  list-style: none;
}

.cultural-list li {
  padding: 0.5rem 0;
  border-bottom: 1px dashed #e2e8f0;
}

.highlight-quote {
  background: #ebf8ff;
  border-left: 4px solid #3498db;
  padding: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: #2c5282;
}

.diplomacy-list {
  list-style: none;
  margin-top: 1rem;
}

.diplomacy-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.diplomacy-list li:before {
  content: '•';
  color: #3498db;
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.overseas-stats {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
}

.stat-item {
  text-align: center;
}

.stat-item h4 {
  font-size: 1.5rem;
  color: #e53e3e;
  margin-bottom: 0.3rem;
}

.connection-list {
  list-style: none;
  margin-top: 1rem;
}

.connection-list li {
  padding: 0.4rem 0;
  border-bottom: 1px solid #edf2f7;
}

.modern-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.point {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.point h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.point ul {
  list-style: none;
  margin-top: 1rem;
}

.point li {
  padding: 0.3rem 0;
  color: #495057;
}
</style>