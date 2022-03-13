<template>
  <div class="navTop">
    <nav-top></nav-top>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import authorContent from ""

export default {
  data(){
    return{
      author:[],
    }
  },
  components: {
    NavTop,
  },
  created(){
    
  },
  methods:{

  },
  mounted(){
    this.essay = JSON.parse(window.sessionStorage.getItem("essay"));
  }
};
</script>

<style scoped>
</style>