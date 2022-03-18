<template>
  <div id="app">
    
    <keep-alive>
      <router-view v-if="isRouterAlive" :key="this.$route.query.id"/>
    </keep-alive>
    
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
