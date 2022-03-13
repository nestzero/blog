<template>
  <div id="author_stars_list">
    <div class="author_stars_title">
      <span>他的收藏</span>
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
.author_stars_title {
  position: relative;

  height: 45px;

  padding: 5px 15px;

  border-bottom: 1px solid #f6f6f6;
}
.author_stars_title span {
  position: absolute;

  top: 30%;

  font-size: 15px;
}
</style>