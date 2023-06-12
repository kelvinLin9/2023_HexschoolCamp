<template>
  <div class="container my-5">
    <Swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      :modules="modules"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }"
      class="mySwiper"
    >
      <SwiperSlide>
        <div class="evaluate-bg my-3">
          <div class="evaluate-star">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
          </div>
          <div>
            <p class="Noto-Sans-TC-400 text-white fs-16">
              非常喜歡 AI工具王 提供的 AI 模型租賃服務，使<br>用起來非常方便，而且效果非常好。對於我們<br>
              公司的業務來說，這個服務非常重要，因為我<br>們需要大量的數據進行分析和預測，AI工具王<br>
              提供的 AI 模型能夠幫助我們節省大量時間和成<br>本，實在是太棒了！
            </p>
          </div>
          <div class="row">
            <div class="col-2">
              <img src="../assets/images/Ellipse3.png" alt="">
            </div>
            <div class="col">
              <div class="Noto-Sans-TC-400 text-white fs-16">陳小姐</div>
              <div class="Noto-Sans-TC-400 text-white fs-14">ABC科技有限公司</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="evaluate-bg my-3">
          <div class="evaluate-star">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
          </div>
          <div>
            <p class="Noto-Sans-TC-400 text-white fs-16">
              作為一家醫療器材公司，我們非常關注人工智<br>能技術的應用，而 AI工具王 提供的 AI 模型租賃<br>
              服務為我們帶來了很大的幫助。我們使用 AI工<br>具王 的模型進行醫學影像分析和預測，這些模 
              型非常精確，能夠幫助我們更好地診斷病情，<br>提高治療效果。感謝 AI工具王 團隊的辛勤工<br>作！
            </p>
          </div>
          <div class="row">
            <div class="col-2">
              <img src="../assets/images/Ellipse3-1.png" alt="劉小姐">
            </div>
            <div class="col">
              <div class="Noto-Sans-TC-400 text-white fs-16">劉小姐</div>
          <div class="Noto-Sans-TC-400 text-white fs-14">XYZ 醫療器材有限公司</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="evaluate-bg my-3 ">
          <div class="evaluate-star">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
            <img src="../assets/images/Star.png" alt="">
          </div>
          <div>
            <p class="Noto-Sans-TC-400 text-white fs-16">
              我們銀行一直在尋找能夠幫助我們提高風險控<br>制和客戶服務的解決方案，而 AI工具王 提供的<br>
              AI 模型租賃服務正好滿足了我們的需求。我們<br>使用 AI工具王 的模型進行客戶信用評估和詐騙<br>
              檢測等任務，這些模型非常準確，能夠幫助我<br>們更好地控制風險，提高客戶滿意度。非常感<br>
              謝 AI工具王 團隊的支持！
            </p>
          </div>
          <div class="row">
            <div class="col-2">
              <img src="../assets/images/Ellipse3.png" alt="黃先生">
            </div>
            <div class="col">
              <div class="Noto-Sans-TC-400 text-white fs-16">黃先生</div>
              <div class="Noto-Sans-TC-400 text-white fs-14">EFG 銀行</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import './style.css'

// import required modules
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
  .evaluate-bg {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0px 100px 80px rgba(18, 18, 18, 0.07), 0px 41.7776px 33.4221px rgba(18, 18, 18, 0.0503198), 0px 22.3363px 17.869px rgba(18, 18, 18, 0.0417275), 0px 12.5216px 10.0172px rgba(18, 18, 18, 0.035), 0px 6.6501px 5.32008px rgba(18, 18, 18, 0.0282725), 0px 2.76726px 2.21381px rgba(18, 18, 18, 0.0196802);
    border-radius: 16px;
    padding: 40px;
    p {
      padding: 20px 0;
      height: 200px;
    }
  }
</style>
