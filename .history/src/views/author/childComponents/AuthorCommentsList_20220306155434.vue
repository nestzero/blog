<template>
  <div id="author_comment_list">
     <div class="author_comment_title">
      <span>他的评论</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      essay:[],
      // 查询信息实体
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      total: 0, //总记录数
    };
  },
  methods:{

  },
  mounted(){
    
  }
};
</script>

<style scoped>
.author_comment_title {
  position: relative;

  height: 45px;

  padding: 5px 15px;

  border-bottom: 1px solid #f6f6f6;
}
.author_comment_title span {
  position: absolute;

  top: 30%;

  font-size: 15px;
}
</style>