<template>
  <section class="header container">
    <div class="row">
      <div class="col-12">
        <h2 class="Noto-Sans-TC-900 text-white fs-120 my-3">
          用多少，<br>付多少。
        </h2>
      </div>
      <div class="col-6 d-flex ms-auto">
        <h3 class="Noto-Sans-TC-900 text-white fs-48">
          我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
        </h3>
      </div>
    </div>
  </section>
  <section class="price container">
    <h4 class="Noto-Sans-TC-900 text-white fs-32 my-5">定價</h4>
    <div class="row row-cols-1 row-cols-sm-2 gy-3 ">
      <div class="col">
        <div class="price-card">
          <div class="price-card-top">
            <p class="Noto-Sans-TC-900 text-white fs-32">琪琪</p>
            <ul class="Noto-Sans-TC-400 fs-16">
              <li>初級</li>
              <li>速度最快</li>
            </ul>
          </div>
          <div class="price-card-end">
            <div class="d-flex justify-content-between">
              <div class="Noto-Sans-TC-900 text-white fs-20">
                NT$5<span class="Noto-Sans-TC-400 fs-20">／1k tokens</span>
              </div>
              <div class="Noto-Sans-TC-700 text-white fs-16">
                開始使用
                <img src="../assets/images/Vector-5.png" alt="箭頭圖示" class="ms-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="price-card">
          <div class="price-card-top">
            <p class="Noto-Sans-TC-900 text-white fs-32">昊昊</p>
            <ul class="Noto-Sans-TC-400 fs-16">
              <li>中級</li>
            </ul>
          </div>
          <div class="price-card-end">
            <div class="d-flex justify-content-between">
              <div class="Noto-Sans-TC-900 text-white fs-20">
                NT$5<span class="Noto-Sans-TC-400 fs-20">／1k tokens</span>
              </div>
              <div class="Noto-Sans-TC-700 text-white fs-16">
                開始使用
                <img src="../assets/images/Vector-5.png" alt="箭頭圖示" class="ms-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="price-card">
          <div class="price-card-top">
            <p class="Noto-Sans-TC-900 text-white fs-32">卡卡</p>
            <ul class="Noto-Sans-TC-400 fs-16">
              <li>高 級</li>
            </ul>
          </div>
          <div class="price-card-end">
            <div class="d-flex justify-content-between">
              <div class="Noto-Sans-TC-900 text-white fs-20">
                NT$5<span class="Noto-Sans-TC-400 fs-20">／1k tokens</span>
              </div>
              <div class="Noto-Sans-TC-700 text-white fs-16">
                開始使用
                <img src="../assets/images/Vector-5.png" alt="箭頭圖示" class="ms-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="price-card">
          <div class="price-card-top">
            <p class="Noto-Sans-TC-900 text-white fs-32">杰杰</p>
            <ul class="Noto-Sans-TC-400 fs-16">
              <li>最高級</li>
              <li>資訊最完善 </li>
            </ul>
          </div>
          <div class="price-card-end">
            <div class="d-flex justify-content-between">
              <div class="Noto-Sans-TC-900 text-white fs-20">
                NT$5<span class="Noto-Sans-TC-400 fs-20">／1k tokens</span>
              </div>
              <div class="Noto-Sans-TC-700 text-white fs-16">
                開始使用
                <img src="../assets/images/Vector-5.png" alt="箭頭圖示" class="ms-2">
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
  <section class="specification container my-5">
    <div class="row">
      <div class="col-12 col-sm-4">
        <h4 class="Noto-Sans-TC-900 text-white fs-32 my-5 mt-auto">使用規範</h4>
      </div>
      <div class="col-12 col-sm-8">
        <ul>
          <li>
            <h4 class="Noto-Sans-TC-900 text-white fs-48">守法</h4>
            <p class="Noto-Sans-TC-400 text-white fs-32">請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
          </li>
          <li>
            <h4 class="Noto-Sans-TC-900 text-white fs-48">資訊安全</h4>
            <p class="Noto-Sans-TC-400 text-white fs-32">請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
          </li>
          <li>
            <h4 class="Noto-Sans-TC-900 text-white fs-48">守密</h4>
            <p class="Noto-Sans-TC-400 text-white fs-32">需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <AIApplication/>

  <section class="qa container my-5">
    <div class="row">
      <div class="col-12 col-sm-4">
        <h4 class="Noto-Sans-TC-900 text-white fs-32 my-5 mt-auto">使用規範</h4>
      </div>
      <div class="col-12 col-sm-8">

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header Noto-Sans-TC-900" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                如何選擇適合的AI模型？
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                租用模型的費用是如何計算的？
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，
                通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                如何進行付款？
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                付款方式可以通過網站上提供的線上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，
                系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AIApplication from '@/components/AIApplication.vue'
export default {
  components: {
    AIApplication
  }
}
</script>

<style lang="scss" scoped>
.price-card {
  padding: 20px 0px;
  border: 1px solid #525252;
  border-radius: 16px;
}
.price-card-top {
  height: 254px;
  padding: 0 40px;
  border-bottom: 1px solid #525252;
  ul {
    color: #919191;
  }
}
.price-card-end {
  padding: 20px 40px 0 40px;
  span {
    color: #919191;
  }
}
.specification {
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding-bottom: 80px;
    }
  }
}
.qa {
}
.accordion-header {
  font-size: 120px;
}
</style>
