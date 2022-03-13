<template>
  <div id="author-content">
    {{author.authorid}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      author:{},
      essay:[],
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