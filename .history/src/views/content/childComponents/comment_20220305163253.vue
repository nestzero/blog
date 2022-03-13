<template></template>

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
        .getEssayByAuthorId(this.queryInfo, essayid)
        .then((res) => {
          this.essay = res.data.data;
          this.total = res.data.numbers;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>