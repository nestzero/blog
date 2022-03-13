<template>
  <div id="home">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <div>{{this.$query}}</div>
  </div>
</template>

<script>
import NavTop from '@/components/common/NavTop';

export default {
  components:{
    NavTop,
  }
}
</script>

<style scoped>

</style>