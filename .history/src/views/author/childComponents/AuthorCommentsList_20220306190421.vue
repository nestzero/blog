<template>
  <div id="author_comment_list" v-show="total!=0">
    <div class="author_comment_title">
      <span>他的评论</span>
    </div>

    <div class="author_list">
      <div
        class="author_comment_list_item"
        v-for="(item, index) in comment"
        :key="index"
      >
        <div v-if="item.authoredid == 0">
          <span>{{ item.essay.title }}</span>
          <span> {{ item.datetime | formatTime }}</span>
          <span>{{ item.content }}</span>
        </div>
        <div v-else>
          <span>{{ item.essay.title }}</span>
          <span> {{ item.datetime | formatTime }}</span>
          <span>回复 @{{ item.authored.authorname }} : {{ item.content }}</span>
        </div>
      </div>
    </div>

    <!-- 分页组件 size-change每页最大变化数 current-change当前最大变化数 layout功能组件-->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-size="queryInfo.pageSize"
        layout="prev, pager, next"
        :total="total"
        class="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import formatTime from "@/filters/formatTime";

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
  filters: {
    formatTime,
  },
  methods: {
    // pageNum的触发功能
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;

      this.getCommentByAuthorId();
    },
    getCommentByAuthorId() {
      const authorid = this.$route.query.id;

      this.$api
        .getCommentByAuthorid(this.queryInfo, authorid)
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
    this.getCommentByAuthorId();
  },
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
.author_list {
  padding: 25px 20px;
}

.author_comment_list_item {
  position: relative;

  width: 762px;

  border-bottom: 1px solid #f6f6f6;

  padding: 30px;
}
.author_comment_list_item span:nth-child(1) {
  position: absolute;

  left: 0px;
  top: 5px;

  color: #008b1d;
  font-size: 14px;
}
.author_comment_list_item span:nth-child(1):hover{
  cursor: pointer;
}
.author_comment_list_item span:nth-child(2) {
  position: absolute;

  left: 230px;
  top: 4px;

  color: #b3b3b3;
  font-size: 15px;
}
.author_comment_list_item span:nth-child(3) {
  position: absolute;

  left: 15px;
  top: 32px;

  font-size: 15px;
}

.pagination{
  position: relative;

  height: 35px;

  padding: 0 15px;
}
.pagination .page{
  position: absolute;

  left:3px;
  top:-10px;
}
</style>