<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <div>{{this.$route.query.item}}</div>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';

export default {
  data(){
    return{
      essay:
    }
  },
  components:{
    NavTop,
  }
}
</script>

<style scoped>
.navTop{
  background-color: #fff;
}
</style>