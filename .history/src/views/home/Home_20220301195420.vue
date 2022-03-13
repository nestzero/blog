<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <home-content></home-content>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import HomeContent from "./childComponents/HomeContent";

export default {
  data() {
    return {
      essay: [],
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
    };
  },
  components: {
    NavTop,
    HomeContent
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
  },
  mounted() {},
};
</script>
<style scoped>
.navTop{
  background-color: #fff;
}
</style>