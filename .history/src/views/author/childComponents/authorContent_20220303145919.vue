<template>
  
</template>

<script>
export default {
  data(){
    return{
      author:[],
    }
  },
  created(){
    
  },
  methods:{

  },
  mounted(){
    this.essay = JSON.parse(window.sessionStorage.getItem("essay"));
  }
}
</script>

<style scoped>

</style>