<template>
  <div id="comment">
    <div class="comment">
      <div class="comment_title">全部评论</div>
      <div>{{comment}}</div>
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
</style>