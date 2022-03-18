<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-about :essay="essay"></author-about>
  </div>
</template>

<script>
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
    NavTop: () => import("@/components/common/NavTop"),
    AuthorAbout: () => import("@/components/content/author/AuthorAbout"),
  },
  created() {},
  methods: {
    getEssayByAuthorId,
  },
  mounted() {
    this.getEssayByAuthorId();
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>