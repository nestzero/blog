<template>
  <div id="nav-top">
    
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navItems: [
        {
          navitem: "博客",
          navpath: "/home",
        },
        {
          navitem: "知识体系",
          navpath: "/",
        },
        {
          navitem: "导图",
          navpath: "/",
        },
        {
          navitem: "关注",
          navpath: "/"
        }
      ],
      NavIndex: 0,
    };
  },
  created() {

  },
  methods: {
    pathToPage(navpath) {
      this.$router.push(navpath);
    },
    onSearch(value) {
      console.log(value);
    },
    changeAlink(index) {
      this.NavIndex = index;
    },
  },
};
</script>

<style scoped>

</style>