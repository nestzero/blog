<template>
  <div id="author_comment_list">
     <div class="author_comment_title">
      <span>他的收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    essay: {
      type: Array,
      default() {
        return [];
      },
    },
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
</style>