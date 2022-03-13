<template>
  <div id="comment">
    <div class="comment">
      <div class="comment_title">
        <span>全部评论</span>
      </div>

      <div class="comment_list">
        <div
          class="comment_list_item"
          v-for="(item, index) in comment"
          :key="index"
        >
          <img
            :src="'http://localhost:9090/api/file/' + item.author.pic"
            alt=""
          />
          <span>{{ item.author.authorname }}</span>
          <span>{{ item.datetime | formatTime }}</span>
          <span>{{ item.content }}</span>

          <first-comment :comment="item.comment"></first-comment>
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
    </div>
  </div>
</template>

<script>
import formatTime from "@/filters/formatTime";

import FirstComment from "./FirstComment";

export default {
  filters: {
    formatTime,
  },
  components: {
    FirstComment,
  },
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
          console.log(total);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // pageNum的触发功能
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      
      this.getCommentByEssayId();
    },
  },
  mounted() {
    this.getCommentByEssayId();
  },
};
</script>

<style scoped>
.comment {
  margin-top: 20px;

  background-color: #fff;
}

.comment_title {
  font-size: 16px;
  font-family: "Microsoft Yahei";

  border-bottom: 1px solid #e5e5e5;
  padding: 20px;
}

.comment_list {
  padding: 15px;
}
.comment_list .comment_list_item {
  position: relative;

  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0;
}
.comment_list_item img {
  width: 50px;
  height: 50px;

  border-radius: 50%;
}
.comment_list_item span:nth-child(2) {
  position: absolute;

  left: 60px;
  top: 27px;

  color: #008b1d;
  font-size: 12px;
}
.comment_list_item span:nth-child(3) {
  position: absolute;

  left: 130px;
  top: 25px;

  color: #b4b4b4;
  font-size: 14px;
}
.comment_list_item span:nth-child(4) {
  position: absolute;

  left: 60px;
  top: 50px;

  width: 762px;

  color: #b4b4b4;
  font-size: 14px;
}
</style>