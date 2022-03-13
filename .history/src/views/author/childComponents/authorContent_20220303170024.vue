<template>
  <div id="author-content">
    {{essay}}
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
    this.author = JSON.parse(window.sessionStorage.getItem("author"));
  }
}
</script>

<style scoped>

</style>