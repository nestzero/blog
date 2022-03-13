<template>
  <div id="nav-top">
    <span>harry coding</span>
  </div>
</template>

<script>
export default {
  name: "NavTop",
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
#nav-top{
  width: 1142px;
  height: 50px;

  margin: auto;
}
#nav-top span{

  font-size: 20px;
  font-family: 'Microsoft Yahei';
  line-height: 50px;
}
</style>