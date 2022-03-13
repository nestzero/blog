<template>
  <div id="author-content">
  </div>
</template>

<script>
export default {
  data(){
    return{
      essay: [],
    }
  },
  created(){
    
  },
  methods:{

  },
  mounted(){
    this.essay = JSON.parse(window.sessionStorage.getItem("author"));
  }
}
</script>

<style scoped>

</style>