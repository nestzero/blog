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
        <span> {{ item.kpi.watch }}点赞·</span>
        <span> {{ item.kpi.comments }}评论·</span>
      </div>
    </div>
  </div>
</template>

<script>
import toEssay from "@/js/toEssay";

import countNums from '@/filters/'

export default {
  props: {
    essay: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      essay_list: this.essay,
    };
  },
  methods: {
    toEssay,
  },
  mounted() {},
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
</style>