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

  <EvaluateView/>

  <section class="partner container my-5">
    <div class="col-12 col-sm-4 Noto-Sans-TC-900 text-white fs-32 me-auto">
        來自合作夥伴
    </div>
    <div class="">
      <div class="overflow-auto pb-2">
        <div class="d-flex">
          <img src="../assets/images/enterprise.png" alt="合作夥伴">
          <img src="../assets/images/enterprise1.png" alt="合作夥伴1">
          <img src="../assets/images/enterprise2.png" alt="合作夥伴2">
          <img src="../assets/images/enterprise3.png" alt="合作夥伴3">
          <img src="../assets/images/enterprise4.png" alt="合作夥伴4">
          <img src="../assets/images/enterprise5.png" alt="合作夥伴5">
        </div>
        <div class="d-flex">
          <img src="../assets/images/enterprise6.png" alt="合作夥伴6">
          <img src="../assets/images/enterprise7.png" alt="合作夥伴7">
          <img src="../assets/images/enterprise8.png" alt="合作夥伴8">
          <img src="../assets/images/enterprise9.png" alt="合作夥伴9">
          <img src="../assets/images/enterprise11.png" alt="合作夥伴11">
          <img src="../assets/images/enterprise12.png" alt="合作夥伴12">
        </div>
      </div>
    </div>
  </section>
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
