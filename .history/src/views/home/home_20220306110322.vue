<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <home-content :essay="essay"></home-content>

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
      essay: [],
      queryInfo: {
        query: "", //查询信息
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      onOff: false,
    };
  },
  components: {
    NavTop,
    HomeContent,
  },
  created() {
    this.getAllEssay();
  },
  methods: {
    
    backTopBtn,
    backTop
  },
  mounted() {
    window.addEventListener("scroll",this.debounce(this.handleScroll, 1000),true);
    
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