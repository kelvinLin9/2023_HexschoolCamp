<template>
  <div class="grassWrapper d-flex  overflow-hidden">
    <!-- <img src="image/deco.png" alt="裝飾"><img src="image/deco.png" alt="裝飾"><img src="image/deco.png" alt="裝飾"> -->
    <div class="grass">
      <div class="circle circle-1"></div>
      <div class="rectangle"></div>
      <div class="circle circle-2"></div>
    </div>
    <div class="grass">
      <div class="circle circle-1"></div>
      <div class="rectangle"></div>
      <div class="circle circle-2"></div>
    </div>
    <div class="grass">
      <div class="circle circle-1"></div>
      <div class="rectangle"></div>
      <div class="circle circle-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grassWrapper {
  height: 117px;
}
@media (min-width: 992px) {
  .grassWrapper {
    height: 180px;
  }
}
.grassWrapper img, .grassWrapper .grass {
  transform: translateY(100%);
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
.grassWrapper img:nth-child(3), .grassWrapper .grass:nth-child(3) {
  animation-name: grow1;
}
.grassWrapper img:nth-child(2), .grassWrapper .grass:nth-child(2) {
  animation-name: grow2;
}
.grassWrapper img:nth-child(1), .grassWrapper .grass:nth-child(1) {
  animation-name: grow3;
}

@keyframes grow1 {
  0%, 20% {
    transform: translateY(101%);
  }
  70%, 85% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@keyframes grow2 {
  0%, 25% {
    transform: translateY(101%);
  }
  75%, 90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@keyframes grow3 {
  0%, 30% {
    transform: translateY(101%);
  }
  80%, 95% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.grass {
  position: relative;
  width: 117px;
  height: 117px;
  flex-shrink: 0;
  overflow: hidden;
}
@media (min-width: 992px) {
  .grass {
    width: 180px;
    height: 180px;
  }
}
.rectangle {
  position: absolute;
  height: 100%;
  width: 11.1111%;
  background-color: #fff;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.circle {
  position: absolute;
  width: 111.1111%;
  height: 111.1111%;
  background-color: #fff;
  top: 50%;
  border-radius: 50%;
}
.circle-1 {
  left: 0%;
  transform: translate(-50%, 0);
}
.circle-2 {
  left: 100%;
  transform: translate(-50%, 0);
}
.circle::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: #000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>