<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/logo.png"
                alt="AI工具王" width="240" height="40" class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 Noto-Sans-TC-400 fs-16">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link"
                          :class="{ 'text-warning':  $route.name === 'home' }">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/price" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'price' }">定價</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView :key="$route.path"/>

  <AIFooter/>

</template>

<script>
import 'bootstrap/js/dist/collapse'
import AIFooter from '@/components/AIFooter.vue'
export default {
  components: {
    AIFooter
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: solid 1px white;
}
</style>
