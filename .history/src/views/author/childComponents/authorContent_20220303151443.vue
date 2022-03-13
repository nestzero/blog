<template>
  <div id="author-content">
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  created(){
    
  },
  methods:{

  },
  mounted(){
    this.author = JSON.parse(window.sessionStorage.getItem("author"));
  }
}
</script>

<style scoped>

</style>