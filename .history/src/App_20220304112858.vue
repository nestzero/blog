<template>
  <div id="app">
    <router-view v-if="isRouterAlive" :key="this.$route.query.id"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
</style>
