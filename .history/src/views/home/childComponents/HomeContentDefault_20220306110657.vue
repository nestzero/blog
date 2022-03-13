<template>
  
</template>

<script>
export default {
  created(){
    this.getAllEssay();
  },
  methods:{
    
  },
  mounted(){
    window.addEventListener("scroll",this.debounce(this.handleScroll, 1000),true);
  }
}
</script>

<style scoped>

</style>