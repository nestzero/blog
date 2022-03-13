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
          <el-avatar size="medium" src="@/assets/60659552_p3.jpg"> </el-avatar>
          <el-dropdown-menu slot="dropdown" class="dropdown-menu">
            <el-dropdown-item> 我的文章 </el-dropdown-item>
            <el-dropdown-item> 我赞过的 </el-dropdown-item>
            <el-dropdown-item> 我的收藏 </el-dropdown-item>
            <el-dropdown-item> 我的收藏 </el-dropdown-item>
            <el-dropdown-item> 退出 </el-dropdown-item>
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
  @import './../../assets/css/common/NavTop.css'
</style>