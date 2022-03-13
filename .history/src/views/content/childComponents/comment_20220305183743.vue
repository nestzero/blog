<template>
  <div id="comment">
    <div class="comment">
      <div class="comment_title">
        <span>全部评论</span>
      </div>

      <div class="comment_list">
        <div class="comment_list_item" v-for="(item,index) in comment" :key="index">
          <img :src="'http://localhost:9090/api/file/' + item.author.pic" alt="">
          <span>{{item.content}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: [],
      // 查询信息实体
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      total: 0, //总记录数
    };
  },
  created() {},
  methods: {
    getCommentByEssayId() {
      const essayid = this.$route.query.id;

      this.$api
        .getCommentByEssayId(this.queryInfo, essayid)
        .then((res) => {
          this.comment = res.data.data;
          this.total = res.data.numbers;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCommentByEssayId();
  },
};
</script>

<style scoped>
.comment{
  margin-top: 20px;

  background-color: #fff;
}

.comment_title{
  font-size: 16px;
  font-family: "Microsoft Yahei";

  border-bottom:1px solid #f6f6f6;
  padding: 20px;
}

.comment_list{

  padding: 15px;
}
.comment_list .comment_list_item{

  border-bottom: 1px solid #f6f6f6;
  padding:20px 0;
}
.comment_list_item img{
  width: 40px;
  height: 40px;

  border-radius: 50%;
}
</style>