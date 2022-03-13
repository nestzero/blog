<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <div></div>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';

export default {
  data(){
    return{
      essay:this.$route.query.item,
    }
  },
  components:{
    NavTop,
  }
  mounted() {
    this.countDateTime();
  },
}
</script>

<style scoped>
.navTop{
  background-color: #fff;
}
</style>