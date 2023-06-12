<template>
  <div class="container-fluid bg-dark">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all.scss";
/* Width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
