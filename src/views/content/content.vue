<template>
  <div id="content">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay :essay="essay[0]"></essay>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import Essay from "@/components/content/content/essay";

export default {
  data() {
    return {
      essay: [],
    };
  },
  components: {
    NavTop,
    Essay,
  },
  created() {
  },
  methods: {
    getEssayByEssayId() {
      const essayid = this.$route.query.id;

      this.$api
        .getEssayByEssayId(essayid)
        .then((res) => {
          this.essay = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
      
  },
  mounted() {
    this.getEssayByEssayId();
  },
  activated(){
  
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>