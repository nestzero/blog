<template>
  <div id="nav-top">
    <span>harry coding</span>

    <div class="nav-list">
      <div
        class="nav-list-item"
        v-for="(item, index) in navList"
        :key="index"
        :class="{ checked: index == NavIndex }"
        @click="toNewPath(item.navpath, index)"
      >
        {{ item.nav }}
      </div>
    </div>

    <div class="right-signin">
        <div class="signin-avatar">
          <el-dropdown trigger="click">
            <el-avatar size="medium" src="@/assets/60659552_p3.jpg">
            </el-avatar>
            <el-dropdown-menu
              slot="dropdown"
              class="dropdown-menu-right-signin"
            >
              <el-dropdown-item> 我的主页 </el-dropdown-item>
              <el-dropdown-item> 我赞过的 </el-dropdown-item>
              <el-dropdown-item> 我的收藏 </el-dropdown-item>
              <el-dropdown-item> 我的课程 </el-dropdown-item>
              <el-dropdown-item> 浏览记录 </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "NavTop",
  data() {
    return {
      navList: [
        {
          nav: "博客",
          navpath: "/home",
        },
        {
          nav: "知识体系",
          navpath: "/",
        },
        {
          nav: "导图",
          navpath: "/",
        },
        {
          nav: "关注",
          navpath: "/",
        },
      ],
      NavIndex: 0,
    };
  },
  created() {},
  methods: {
    toNewPath(navpath, index) {
      this.NavIndex = index;

      this.$router.push(navpath);
    },
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
#nav-top {
  width: 1142px;
  height: 50px;

  margin: auto;
}
#nav-top span {
  float: left;

  font-size: 20px;
  font-family: "Microsoft Yahei";
  line-height: 50px;
}
.nav-list {
  float: left;

  width: 360px;
  height: 50px;

  margin-left: 50px;
}
.nav-list .nav-list-item {
  display: inline-block;

  width: 70px;

  font-size: 16px;
  line-height: 50px;
  text-align: center;

  margin: 0 5px;
}
.nav-list-item:nth-child(2) {
  margin: 0 10px;
}
.nav-list-item:hover {
  color: #04c4fc;
  cursor: pointer;
}

.right-signin{
  float: right;
  position: relative;

  width: 50px;
  height: 50px;

  line-height: 50px;
}
.signin-avatar

.checked {
  color: #04c4fc !important;
}
</style>