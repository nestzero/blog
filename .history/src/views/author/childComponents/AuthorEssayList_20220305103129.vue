<template>
  <div id="author_essay_list">
    <div class="author_essay_title">
      <span>他的文章</span>
    </div>

    <div class="author_list">
      <div
        class="author__essay_list_item"
        v-for="(item, index) in essay"
        :key="index"
      >
        <span> {{ item.title }}</span>
        <span> {{ item.kpi.watch | countNums }} 点赞 · </span>
        <span> {{ item.kpi.comments | countNums }} 评论 · </span>
        <span>{{ item.datetime | formatTime }}</span>
      </div>

      <!-- 分页组件 size-change每页最大变化数 current-change当前最大变化数 layout功能组件-->
      <div>
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="queryInfo.pageSize"
          :pager-count="11"
          layout="prev, pager, next"
          :total="total"
          style="margin-left: 30px"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import toEssay from "@/js/toEssay";
import getEssayByAuthorId from '@/js/getEssayByAuthorId';

import countNums from "@/filters/countNums";
import formatTime from "@/filters/formatTime";

export default {
  filters: {
    countNums,
    formatTime,
  },
  data() {
    return {
      essay:[],
      // 查询信息实体
      queryInfo: {
        query: "", //查询信息
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
      total: 0, //总记录数
    };
  },
  methods: {
    toEssay,
    getEssayByAuthorId,
    // pageNum的触发功能
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      

    },
  },
  mounted() {
    this.getEssayByAuthorId();
  },
};
</script>

<style scoped>
.author_essay_title {
  position: relative;

  height: 45px;

  padding: 5px 15px;

  border-bottom: 1px solid #f6f6f6;
}
.author_essay_title span {
  position: absolute;

  top: 30%;

  font-size: 15px;
}

.author_list {
  padding: 15px;
}

.author_list .author_list_item {
  border-bottom: 1px solid #f6f6f6;

  padding: 15px;
}
</style>
