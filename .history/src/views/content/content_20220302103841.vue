<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <div>{{essay}}</div>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';

export default {
  data(){
    return{
      essay:{},
    }
  },
  components:{
    NavTop,
  },
  created(){

  },
  mounted() {
    this.essay=window.s;
  },
}
</script>

<style scoped>
.navTop{
  background-color: #fff;
}
</style>