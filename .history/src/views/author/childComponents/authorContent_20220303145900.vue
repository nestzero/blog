<template>
  
</template>

<script>
export default {

  mounted(){
    this.essay = JSON.parse(window.sessionStorage.getItem("essay"));
  }
}
</script>

<style scoped>

</style>