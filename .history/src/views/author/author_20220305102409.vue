<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-about :essay="essay"></author-about>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import AuthorAbout from "./childComponents/AuthorAbout";

import getEssayByAuthorId from "@/js/getEssayByAuthorId";

export default {
  data() {
    return {
      author: {},
      essay: [],
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      total: 0, //总记录数
    };
  },
  components: {
    NavTop,
    AuthorAbout,
  },
  created() {
  },
  methods: {
    getEssayByAuthorId,
  },
  mounted() {
    this.getEssayByAuthorId();
    console.log(this.total);
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>