<template>
  
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

</style>