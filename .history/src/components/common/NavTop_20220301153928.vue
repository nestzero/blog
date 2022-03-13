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
          navitem: "资讯",
          navpath: "/news",
        },
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
.center {
  flex: 1;
}
/*导航栏右侧*/
.right {
  display: flex;
  flex: 3;
  margin: 14px 0;
}
.right .right-search {
  flex: 3;
  width: 250px;
  margin-top: 1px;
}
.right .right-writer {
  width: 64px;
  height: 21px;
  flex: 3;
  margin-top: -2px;
}
.dropdown-menu-right-writer {
  margin-right: 20px;
}
.right .right-signin {
  flex: 1;
  width: 100%;
}
.right .right-signin .signin-avatar {
  margin-top: 1px;
  margin-right: -10px;
}
.dropdown-menu-right-signin {
  margin-right: -25px;
}
.right .right-comments {
  flex: 1;
  width: 100%;
}
.dropdown-menu-right-comments {
  margin-right: -60px;
}

.message-item-spot {
  width: 50px;
  right: -25px;
  bottom: -6px;
  float: right;
}
.icon-warp {
  margin-top: 4px;
  font-size: 30px;
}
.checked {
  color: #04c4fc !important;
}
</style>