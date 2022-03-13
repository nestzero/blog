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
    getAllEssay() {
      this.$api
        .getAllEssay(this.queryInfo)
        .then((res) => {
          this.essay = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 防抖
    debounce(fn, wait) {
      let timeout;

      return function () {
        let context = this;
        let args = arguments;

        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          fn.apply(context, args);
        }, wait);
      };
    },
    //文章加载事件
    handleScroll() {
      const scrollDistance =
        // 正文全文高
        document.body.scrollHeight -
        // 被卷去的高
        document.documentElement.scrollTop -
        // 可见区域的宽度
        document.body.clientHeight;

      // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
      if (scrollDistance <= 0) {
        //这个开关是为了避免请求数据中 再次被请求
        if (this.onOff) return;

        this.onOff = true;
        // 当前页数和总页数在第一次请求数据就要保存起来
        this.queryInfo.pageNum += 1;

        this.$api.getAllEssay(this.queryInfo).then((res) => {
          this.onOff = false;
          this.essay = this.essay.concat(res.data.data);
        });
      }
    },
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