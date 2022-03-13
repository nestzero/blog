<template>
  <div>
     <div class="author_comment_title">
      <span>他的收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    essay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
</style>