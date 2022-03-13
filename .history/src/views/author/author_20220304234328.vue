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
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>