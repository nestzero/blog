<template>
    <div>{{author}}</div>
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
    this.author = JSON.parse(window.sessionStorage.getItem("author"));
  }
}
</script>

<style scoped>

</style>