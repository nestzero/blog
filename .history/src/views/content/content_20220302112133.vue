<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay></essay>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';
import Essay from './childComponents/essay';
import Essay from './childComponents/essay.vue';

export default {
  data(){
    return{
      essay:{},
    }
  },
  components:{
    NavTop,
    Essay
    Essay,
  },
  created(){

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