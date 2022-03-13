<template>
  <div id="content">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay :essay="essay"></essay>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';
import Essay from './childComponents/essay';

export default {
  data(){
    return{
      essay: [],
    }
  },
  components:{
    NavTop,
    Essay
  },
  created(){
    this.getEssayByEssayId();
  },
  methods:{
    getEssayByEssayId(){
      const essayid = JSON.parse(window.sessionStorage.getItem("essay_id"));

      this.$api
        .getEssayByEssayId(essayid)
        .then((res) => {
          this.essay=res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });

      console.log();
    },
    
  },
  mounted() {
  },
}
</script>

<style scoped>
.navTop{
  background-color: #fff;
}
</style>