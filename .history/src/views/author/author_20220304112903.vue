<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-content :essay="essay[0]"></author-content>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import AuthorContent from "./childComponents/AuthorContent";

import toEssay from "@/js/toEssay";

export default {
  inject:['reload'],
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
    toEssay
  },
  mounted() {
    this.getEssayByAuthorId();
  },
  activated(){
    
  }
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>