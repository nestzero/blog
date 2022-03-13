<template>
  <div>star</div>
  <div>{{essay}}</div>
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
  mounted(){
  }
}
</script>

<style scoped>

</style>