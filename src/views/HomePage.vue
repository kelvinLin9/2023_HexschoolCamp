<template>
  <section class="header container">
    <div class="row">
      <div class="col-9">
        <h1 class="Noto-Sans-TC-900 text-white fs-120 my-3">
          透過<br>AI 工具王的<br>強大模型<br>讓您的業務<br class="d-block d-sm-none">更聰明
        </h1>
        <button type="button" class="btn btn-dark Noto-Sans-TC-900 text-white fs-20 my-3">
          開始使用
        </button>
      </div>
      <div class="col-12 col-sm-6 d-flex ms-auto justify-content-center justify-content-sm-end">
        <GrassAnima/>
      </div>
    </div>
  </section>
  <section class="serve container my-5">
    <div class="row">
      <div class="col-12 col-sm-4 Noto-Sans-TC-900 text-white fs-32 me-auto">
        我們的服務
      </div>
      <div class="col-12 col-sm-8 d-flex justify-content-end Noto-Sans-TC-900 text-white fs-48">
        我們相信透過 AI 技術，<br>
        包括圖像識別、自然語<br>言處理和機器翻譯等，<br>讓您更快、更準確地做<br>出決策。
      </div>
    </div>
    <ul class="row my-5 list-group-horizontal gy-3">
      <li class="col-12 col-sm-4 d-flex align-items-stretch">
        <div class="sever-feature">
          <img src="../assets/images/Vector.png" alt="服務logo">
          <h4 class="Noto-Sans-TC-900 text-white fs-32">快速</h4>
          <h5 class="Noto-Sans-TC-400 text-white fs-16">我們先進的推理基礎設施提供了極短的響應時<br>間，讓你的產品服務不間斷。</h5>
        </div>
      </li>
      <li class="col-12 col-sm-4 d-flex align-items-stretch">
        <div class="sever-feature">
          <img src="../assets/images/Vector-1.png" alt="服務logo">
          <h4 class="Noto-Sans-TC-900 text-white fs-32">靈活</h4>
          <h5 class="Noto-Sans-TC-400 text-white fs-16">我們的服務可以根據您的需求進行靈活調整，<br> 同時還可以滿足不同項目和預算的需求。</h5>
        </div>
      </li>
      <li class="col-12 col-sm-4 d-flex align-items-stretch">
        <div class="sever-feature">
          <img src="../assets/images/Vector-2.png" alt="服務logo">
          <h4 class="Noto-Sans-TC-900 text-white fs-32">擴充</h4>
          <h5 class="Noto-Sans-TC-400 text-white fs-16">我們的服務支持多種擴充選項，可以滿足您的<br>不斷增長的 AI 需求。</h5>
        </div>
      </li>
    </ul>
  </section>
  <!-- <section class="evaluate container my-5">
    <ul class="row">
      <li class="col-4 d-flex align-items-stretch">
        <div class="evaluate-bg">
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
      </li>
      <li class="col-4 d-flex align-items-stretch">
        <div class="evaluate-bg">
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
              <img src="../assets/images/Ellipse3-1.png" alt="">
            </div>
            <div class="col">
              <div class="Noto-Sans-TC-400 text-white fs-16">劉小姐</div>
              <div class="Noto-Sans-TC-400 text-white fs-14">XYZ 醫療器材有限公司</div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-4 d-flex align-items-stretch">
        <div class="evaluate-bg">
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
              <img src="../assets/images/Ellipse3-2.png" alt="">
            </div>
            <div class="col">
              <div class="Noto-Sans-TC-400 text-white fs-16">黃先生</div>
              <div class="Noto-Sans-TC-400 text-white fs-14">EFG 銀行</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section> -->
  
  <EvaluateView/>
  <AIApplication/>

  <section class="start-use container my-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <h3 class="Noto-Sans-TC-900 text-white fs-48 text-center">
          現在就來建立屬於你的服務吧
        </h3>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-dark Noto-Sans-TC-900 text-white fs-20">
          開始使用
          <img src="../assets/images/Vector-5.png" alt="箭頭圖示" class="ms-2">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AIApplication from '@/components/AIApplication.vue'
import GrassAnima from '@/components/GrassAnima.vue'
import EvaluateView from '@/components/EvaluateView.vue'
export default {
  components: {
    AIApplication,
    GrassAnima,
    EvaluateView
  }
}
</script>

<style lang="scss" scoped>
// header
.header {
  button {
    padding: 20px 40px;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
  }
}
//服務
.serve{
  ul {
    list-style-type: none;
    padding: 0;
  }
  .sever-feature {
    border: 1px solid #525252;
    border-radius: 16px;
    padding: 80px 40px;
    img {
      padding-bottom: 26.67px;
    }
    h4 {
      padding-bottom: 20px;
    }
  }
}
// 評價
.evaluate{
  ul {
    list-style-type: none;
    padding: 0;
    .evaluate-bg {
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0px 100px 80px rgba(18, 18, 18, 0.07), 0px 41.7776px 33.4221px rgba(18, 18, 18, 0.0503198), 0px 22.3363px 17.869px rgba(18, 18, 18, 0.0417275), 0px 12.5216px 10.0172px rgba(18, 18, 18, 0.035), 0px 6.6501px 5.32008px rgba(18, 18, 18, 0.0282725), 0px 2.76726px 2.21381px rgba(18, 18, 18, 0.0196802);
      border-radius: 16px;
      padding: 40px;
      p {
        padding: 20px 0;
      }
    }
  }
}
// 建立服務
.start-use {
  h3{
    margin-top: 80px;
  }
  button {
    padding: 20px 32px 20px 40px;
    margin-top: 60px;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
  }
}
</style>
