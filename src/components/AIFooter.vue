<template>
  <footer class="footer container ">
    <div class="footer-top row flex-row-reverse d-flex justify-content-between py-5">
      <div class="col-12 col-sm-3 d-flex justify-content-start justify-content-sm-end">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/logo.png" alt="logo" width="240" height="40">
      </div>
      <div class="col-12 col-sm-2 mt-3">
        <h2><a href="#" class="Noto-Sans-TC-900 text-white fs-80 text-decoration-none">首頁</a></h2>
        <h2><a href="#" class="Noto-Sans-TC-900 text-white fs-80 text-decoration-none">定價</a></h2>
      </div>
    </div>
    <div class="footer-end row d-flex justify-content-between mt-5">
      <div class="col-2 d-flex justify-content-star test">
        <h5 class="Noto-Sans-TC-900 text-white fs-16 text-decoration-none pe-5">AI工具王 © 2023</h5>
      </div>
      <div class="col-3 test">
        <ul class="list-group list-group-horizontal">
          <li><a href="#" class="Noto-Sans-TC-900 text-white fs-16 text-decoration-none px-2">Facebook</a></li>
          <li><a href="#" class="Noto-Sans-TC-900 text-white fs-16 text-decoration-none px-2">Twitter</a></li>
          <li><a href="#" class="Noto-Sans-TC-900 text-white fs-16 text-decoration-none px-2">Instagram</a></li>
        </ul>
      </div>
      <div class="col-2 d-flex justify-content-end test">
        <p class="Noto-Sans-TC-900 text-white fs-16 text-decoration-none px-2">Back to top</p>
        <img src="../assets/images/Vector-10.png" alt="漏斗圖示">
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer {

}
.footer-top {
  border-bottom: solid 1px white;
}
.list-group {
  list-style-type: none;
  padding: 0;
}
</style>
