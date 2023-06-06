<template>
  <div class="application test">
    <h3 class="Noto-Sans-TC-900 text-center fs-80 mt-5 test">
      這些超酷的應用，都來自 AI工具王
    </h3>
    <div class="search d-flex align-items-center">
      <input type="search" class="form-control" id="search" placeholder=""
          v-model="cacheSearch">
          <label for="search">
            <img src="../assets/images/Vector-15.png" alt="">
            <span class="Noto-Sans-TC-400 fs-16 ms-2">輸入關鍵字搜尋</span>
          </label>
    </div>
    <div class="filter d-flex justify-content-between align-items-center my-3">
      <div class="Noto-Sans-TC-400 fs-16">篩選</div>
      <div class="">
        <button type="button" class="btn Noto-Sans-TC-700 fs-16 mx-1"
          v-for="item in tagName" :key="item">
          {{ item }}
        </button>
      </div>
      <div class="Noto-Sans-TC-400 ">由新到舊</div>
    </div>
    <!-- 接AI區塊 -->
    <div class="container mb-5">
      <div class="row">
        <div class="card-container col-sm-4 col-12 g-5"
              v-for="item in Products" :key="item.imageUrl">
          <div class="card-pic">
            <img :src="item.imageUrl" alt="img">
          </div>
          <div class="card-title">
            <h3 class="Noto-Sans-TC-900 fs-20">
              {{item.title}}
            </h3>
            <p class="Noto-Sans-TC-400 fs-14">
              {{item.description}}
            </p>
          </div>
          <div class="card-sub-title d-flex justify-content-between align-items-center">
            <h4 class="Noto-Sans-TC-700 fs-16"> {{item.subTitle}} </h4>
            <span class="Noto-Sans-TC-400 fs-16"> {{item.auth}} </span>
          </div>
          <div class="card-tag d-flex justify-content-between align-items-center">
            <a href="#" class="Noto-Sans-TC-400 fs-16 text-decoration-none text-dark">
              {{item.tag}}
            </a>
            <a href="#" class="Noto-Sans-TC-400 fs-16 text-decoration-none text-dark">
              <span class="">share</span>
            </a>
          </div>
        </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tagName: ['全部', '聊天', '影像辨識', '翻譯', '行動', '客服', '生產力'],
      Products: [
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true',
          title: 'Chatbot Builder',
          description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          subTitle: 'AI 模型',
          auth: '卡卡',
          tag: '#聊天'
        },
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true',
          title: 'Image Recognition Platform',
          description: '專業的圖像識別平台，識別圖像、分類、標記等。',
          subTitle: 'AI 模型',
          auth: '杰杰',
          tag: '#影像辨識'
        },
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true',
          title: 'Language Translation API',
          description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
          subTitle: 'AI 模型',
          auth: '琪琪',
          tag: '#翻譯'
        },
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true',
          title: 'Sentiment Analysis API',
          description: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
          subTitle: 'AI 模型',
          auth: '昊昊',
          tag: '#行銷'
        },
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true',
          title: 'Fraud Detection Platform',
          description: '預防詐騙活動，適用於銀行、金融、電商等。',
          subTitle: 'AI 模型',
          auth: '卡卡',
          tag: '#客服'
        },
        {
          imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true',
          title: 'Voice Assistant SDK',
          description: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
          subTitle: 'AI 模型',
          auth: '杰杰',
          tag: '#生產力'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.application {
  max-width: 1920px;
  height: 1918px;
  background: #FFFFFF;
  border-radius: 160px;
}
.search {
  color: #919191;
  position: relative;
  input{
    width: 1296px;
    height: 64px;
    background: #F2F2F2;
    border-radius: 16px;
    border: 0;
  }
  label {
    position:absolute;
    left: 40px;
  }
}
.filter{
  width: 1296px;
  .btn {
    padding: 8px 16px;
    background: #F2F2F2;
    border-radius: 16px;
  }
}
.card-container {
  // border: 1px solid #F2F2F2;
}
.card-pic {
  img{
    width: 100%;
    border-radius:16px 16px 0 0;
  }
}
.card-title {
  padding: 20px 32px 12px;
  border-bottom: 1px solid #F2F2F2;
  height: 118px;
}
.card-sub-title {
  padding: 20px 32px 12px;
  border-bottom: 1px solid #F2F2F2;
}
.card-tag {
  padding: 20px 32px 12px;
  border-bottom: 1px solid #F2F2F2;
}
</style>
