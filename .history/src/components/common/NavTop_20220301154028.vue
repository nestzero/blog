<template>
  <div class="nav-bar">
    
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
  created() {},
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
.nav-bar {
  display: flex;

  width: 100%;
  font-size: 14px;
  color: #4c5464;
  text-align: center;
  text-shadow: 0 1px 1px rgb(0 0 0 / 30%);

  padding: 0 20px;
}

/*导航栏左侧*/
.left {
  display: flex;
  flex: 4;

  margin: 14px 0;
}
.left .left-sign {
  flex: 1;
  font-size: 20px;
}
.left .left-nav {
  display: flex;
  flex: 1;
  font-size: 1.33rem;
}
.left .left-nav-item {
  flex: 1;
}
.left-nav-item :hover {
  cursor: pointer;
}
.left-nav-item span {
  color: #4c5464;
}
.left-nav-item span:hover {
  color: #000 !important;
  padding-bottom: 14px;
  border-bottom: 3px solid #0484ff;
}

/*导航栏中间*/
</style>