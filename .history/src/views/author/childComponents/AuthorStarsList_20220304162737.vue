<template>
  <div>
    <div class="author_essay_title">
      <span>他的文章</span>
    </div>>
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
  mounted() {},
};
</script>

<style scoped>
</style>