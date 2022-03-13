<template>
  <div id="home">
    <nav-top></nav-top>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import NavTop from '../../components/common/NavTop.vue';

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
    NavTo
    NavTopp,
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
</style>