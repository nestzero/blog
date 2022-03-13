<template>
  <div>
    <div>{{ essay }}</div>
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