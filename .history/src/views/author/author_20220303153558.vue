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
    getEssayByAuthorId(authorid){
      this.$api.getEssayByAuthorId(authorid).then((res)=>{
        this.essay=res.data.data
      }).catch()
    }
  },
  mounted() {
    this.author = JSON.parse(window.sessionStorage.getItem("author"));
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>