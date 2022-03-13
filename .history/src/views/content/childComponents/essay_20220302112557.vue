<template>
  <div id="essay">
    <div class="essay_title">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      essay:[]
    }
  },
  mounted(){
    this.essay=JSON.parse(window.sessionStorage.getItem('essay'));
  }
}
</script>

<style scoped>
#essay{
  
}
</style>