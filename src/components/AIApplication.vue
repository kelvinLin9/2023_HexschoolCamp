<template>
  <div class="application">
    <div class="container">
      <h3 class="Noto-Sans-TC-900 text-center fs-80">
        這些超酷的應用，都來自 AI工具王
      </h3>
      <div class="row">
        <div class="search col-12 d-flex align-items-center">
          <input type="search" class="form-control" id="search" placeholder=""
              v-model="cacheSearch">
              <label for="search">
                <img src="../assets/images/Vector-15.png" alt="">
                <span class="Noto-Sans-TC-400 fs-16 ms-2">輸入關鍵字搜尋</span>
              </label>
        </div>
        <div class="filter col-12">
          <div class="row d-flex align-items-center">
            <div class="col-6 col-sm-2 test">
              <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <span class="Noto-Sans-TC-400 fs-16 me-2">篩選</span>
                <img src="../assets/images/Vector-13.png" alt="漏斗圖示">
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div class="col-8 d-none d-sm-block">
              <div class="d-flex justify-content-center">
                <button type="button" class="btn-sm Noto-Sans-TC-700 fs-16 mx-1"
                  v-for="item in tagName" :key="item">
                  {{ item }}
                </button>
              </div>
            </div>
            <div class="col-6 col-sm-2 d-flex justify-content-end align-items-center">
              <button type="button">
                <span class="Noto-Sans-TC-400 fs-16 me-2">由新到舊</span>
                <img src="../assets/images/Vector-13.png" alt="漏斗圖示">
              </button>
            </div>
            <div class="col-12 d-block d-sm-none">
              <button type="button" class="btn-sm Noto-Sans-TC-700 fs-16 mx-1"
                v-for="item in tagName" :key="item">
                {{ item }}
              </button>
            </div>
          </div>
          </div>
        <!-- 接AI區塊 -->
        <div class="container mb-5">
          <div class="row">
            <div class="col-sm-4 col-12 gy-3 d-flex align-items-stretch"
                  v-for="item in worksData" :key="item.imageUrl">
              <div class="card card-container">
                <div class="card-pic">
                  <img :src="item.imageUrl" alt="img">
                </div>
                <div class="card-title card-body">
                  <p class="Noto-Sans-TC-900 fs-20">
                    {{ item.title }}
                  </p>
                  <p class="Noto-Sans-TC-400 fs-14 ">
                    {{ item.description }}
                  </p>
                </div>
                <div class="card-sub-title d-flex justify-content-between align-items-center">
                  <h4 class="Noto-Sans-TC-700 fs-16"> {{ item.subTitle }} </h4>
                  <span class="Noto-Sans-TC-400 fs-16"> {{ item.model }} </span>
                </div>
                <div class="card-tag d-flex justify-content-between align-items-center">
                  <a href="#" class="Noto-Sans-TC-400 fs-16 text-decoration-none text-dark">
                    {{ item.type }}
                  </a>
                  <a href="#" class="Noto-Sans-TC-400 fs-16 text-decoration-none text-dark">
                    <span class="">share</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-3 mt-3 ms-sm-auto d-flex justify-content-center justify-content-sm-end">
              <nav aria-label="Page navigation example">
                <ul class="pagination Noto-Sans-TC-700 fs-14">
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import apiStore from '@/stores/apiStore'
export default {
  methods: {
    ...mapActions(apiStore, ['getData'])
  },
  computed: {
    ...mapState(apiStore, ['worksData', 'pagesData', 'tagName'])

  },
  created () {
    console.log('669')
    const data = {
  type: '',
  sort: 1,
  page: 1,
  search: '',
}
    this.getData(data)
    console.log('669')
  }
}
</script>

<style scoped lang="scss">
.application {
  background: #FFFFFF;
  border-radius: 160px;
  @media (max-width: 576px) {
    border-radius: 20px;
  }
  h3 {
    padding: 160px 0 80px;
  }
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
  padding: 44px 0  40px;
  button {
    width: 132px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    border-radius: 16px;
  }
  .btn-sm {
    width: 80px;
    height: 40px;
    color: #919191;
    background: #FFFFFF;
    border-radius: 16px;
  }
}
.collapse {
  width: 240px;
  // padding: 20px 32px 20px 40px;
}
.card-container {
  border: 1px solid #F2F2F2;
  border-radius:16px;
  .card-pic {
    overflow: hidden;
    img{
      width: 100%;
      border-radius:16px 16px 0 0;
      transform: scale(1);
        transition: all 0.5s;
      &:hover {
        transform: scale(1.3);
        transition: all 0.5s;
      }
    }
  }
  .card-title {
    padding: 20px 32px 12px;
    border-bottom: 1px solid #F2F2F2;
  }
  .card-sub-title {
    padding: 20px 32px 12px;
    
  }
  .card-tag {
    border-top: 1px solid #F2F2F2;
    padding: 20px 32px 12px;
  }
}
.page-link {
  color: black;
  border: 0px solid #F2F2F2;
  border-radius: 16px;
}
</style>
