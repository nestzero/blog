<template>
  
</template>

<script>
export default {
  data(){
    return{
      comment:[],
       // 查询信息实体
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      total: 0, //总记录数
    }
  },
  created(){

  },
  methods:{
    getCommentByEssayId(){
      const essayid=this.$route.query.id;
    }
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>