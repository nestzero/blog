<template>
  <span>hello</span>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  components:{

  },
  created(){
    this.getAllEssay();
  },
  methods:{
    getAllEssay() {
      this.$api.getAllEssay(this.queryInfo).then((res) => {
        this.essay = res.data.data;
      }).catch((error) => {
        console.log(error);
      });
      console.log();
    },
  },
  mounted(){

  }
};
</script>
<style scoped>

</style>