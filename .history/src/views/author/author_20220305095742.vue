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
        query: "", //查询信息
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
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
    this.getEssayByAuthorId(this.queryInfo);
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>