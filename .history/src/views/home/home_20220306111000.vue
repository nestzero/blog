<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <home-content></home-content>

    <div class="btn" ref="btn" @click="backTop">
      <a href="javascript:;">
        <img src="@/assets/images/backtop.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import HomeContent from "./childComponents/HomeContent";

import {backTopBtn,backTop} from '@/js/backTop';

export default {
  data() {
    return {
      
    };
  },
  components: {
    NavTop,
    HomeContent,
  },
  created() {
  },
  methods: {
    backTopBtn,
    backTop
  },
  mounted() {
    
    window.addEventListener("scroll", this.backTopBtn, true);
  },
};
</script>
<style scoped>
.navTop {
  background-color: #fff;
}

.btn {
  width: 40px;
  height: 40px;
  line-height: 20px;
  display: none;
  position: fixed;
  right: 10px;
  bottom: 100px;

  transition: all 1s linear 0s;
}
.btn img {
  width: 40px;
  height: 40px;
}
</style>