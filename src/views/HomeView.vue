<template>
  <div>
    <section class="header">
      <!-- navbar -->
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-d             ark">
        <div class="container-fluid">
          <a class="navbar-brand ps-5" href="#">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/logo.png" alt="AI工具王">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li class="nav-item">
                <a class="nav-link fs-18 text-white" href="#"
                @click.prevent="moveToChallenge()"
                >
                  關卡任務
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-18 text-white" href="#"
                @click.prevent="moveToInstructions()"
                >
                  競賽說明
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-18 text-white bg-danger rounded-pill px-5" href="https://2022.thef2e.com/users">立即報名</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </section>



    <footer>
      <div class="bg-white d-flex justify-content-center py-3">
        <a href="https://titansoft.com/tw/go_jira">
          <img src="../assets/images/jira.png" alt="jira-logo" class="px-5">
        </a>
        <a href="https://www.atlassian.com/software/confluence">
          <img src="../assets/images/confluence.png" alt="confluence-logo" class="px-5">
        </a>
        <a href="https://titansoft.com/tw/get_miro">
          <img src="../assets/images/miro.png" alt="miro-logo" class="px-5">
        </a>
        <a href="https://www.dottedsign.com/zh-tw?utm_source_k=PR&utm_campaign_k=PR_Hexschool_SponsorEvent_2022&utm_medium_k=Hexschool">
          <img src="../assets/images/dotted.png" alt="dotted-logo" class="px-5">
        </a>
      </div>
      <div class="bg-primary">
        <h2 class="Noto-Serif-TC text-white text-center pt-5">贊助單位</h2>
        <div class="d-flex justify-content-around py-5">
          <a href="https://blockstudio.tw/">
            <img src="../assets/images/blockstudio.png" alt="blockstudio-logo">
          </a>
          <a href="https://www.kdanmobile.com/zh-tw">
            <img src="../assets/images/kdan.png" alt="kdan-logo">
          </a>
          <a href="https://titansoft.com/tw">
            <img src="../assets/images/titan.png" alt="titan-logo">
          </a>
        </div>
        <div class="text-white text-center Noto-Serif-TC pb-3">
          六角日報 © Code: <a href="https://github.com/kelvinLin9" class="text-danger text-decoration-none">Kelvin Lin</a>   /  Design: <a href="https://www.behance.net/KT_Designer" class="text-danger text-decoration-none">KT</a>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { mapState, mapActions } from 'pinia'
import gsapStore from '@/stores/gsapStore'
import timeStore from '@/stores/timeStore'
import AOS from 'aos'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import swipeUp from '@/assets/json/swipe_up.json'
import loading from '@/assets/json/loading.json'
import scrollDown from '@/assets/json/scroll_down.json'
export default {
  components: {
    Vue3Lottie
  },
  data () {
    return {
      swipeUp,
      loading,
      scrollDown,
      isLoading: true,
      freeGoodies: false
    }
  },
  computed: {
    ...mapState(timeStore, ['dateline'])
  },
  methods: {
    ...mapActions(gsapStore, ['bannerAnimation', 'ChallengeAnimation', 'awardsAnimation', 'loadingAnimation']),
    ...mapActions(timeStore, ['getTime']),
    moveToChallenge () {
      window.scrollTo({
        top: 1780,
        behavior: 'smooth' // smooth(平滑滚动),instant(瞬间滚动),默认值 auto
      })
    },
    moveToInstructions () {
      window.scrollTo({
        top: 3880,
        behavior: 'smooth'
      })
    },
    scrollStop () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)
    },
    scrollMove () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    }
  },
  mounted () {
    this.loadingAnimation()
    this.bannerAnimation()
    this.ChallengeAnimation()
    this.awardsAnimation()
    this.getTime()
    this.scrollStop()
    setTimeout(() => {
      this.scrollMove()
      this.isLoading = false
    }, 5000)
    AOS.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
