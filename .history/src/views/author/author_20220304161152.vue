<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-about></author-about>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import AuthorAbout from "./childComponents/AuthorAbout";

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
    getEssayByAuthorId() {
      const authorid = this.$route.query.id;

      this.$api
        .getEssayByAuthorId(authorid)
        .then((res) => {
          this.essay=res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
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