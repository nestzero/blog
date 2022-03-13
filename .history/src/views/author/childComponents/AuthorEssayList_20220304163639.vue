<template>
  <div id="author_essay_list">
    <div class="author_essay_title">
      <span>他的文章</span>
    </div>

    <div class="author_list">
      <div class="author__essay_list_item" v-for="(item,index) in essay_list" :key="index">
        <div>{{item.title}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import toEssay from "@/js/toEssay";

export default {
  props: {
    essay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      essay_list:this.essay
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