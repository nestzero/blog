<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-content></author-content>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import AuthorContent from "./childComponents/AuthorContent";

export default {
  data() {
    return {
      author: {},
      essay: [],
    };
  },
  components: {
    NavTop,
    AuthorContent,
  },
  created() {},
  methods: {
    getEssayByAuthorId() {
      this.$api
        .getEssayByAuthorId(this.author.authorid)
        .then((res) => {
          this.essay = res.data.data;
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });

    },
  },
  mounted() {
    this.author = JSON.parse(window.sessionStorage.getItem("author"));
    this.getEssayByAuthorId;
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>