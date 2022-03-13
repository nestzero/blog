<template>
  <div class="nav-bar">
    <div class="left">
      <span class="left-sign">harry coding</span>
      <div class="left-nav" v-for="(item, index) in navItems" :key="index">
        <div class="left-nav-item">
          <span
            :class="{ checked: index === NavIndex }"
            @click="
              changeAlink(index);
              pathToPage(item.navpath);
            "
            >{{ item.navitem }}
          </span>
        </div>
      </div>
    </div>
    <div class="center"></div>
    <div class="right">
      <a-input-search
        placeholder="input search text"
        style="width: 180px; height: 33px"
        @search="onSearch"
      />
      <div class="right-writer">
        <el-dropdown split-button type="primary">
          创作中心
          <el-dropdown-menu slot="dropdown" class="dropdown-menu-right-writer">
            <el-dropdown-item>写文章</el-dropdown-item>
            <el-dropdown-item>发沸点</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right-comments">
        <el-dropdown trigger="hover">
          <i class="el-icon-bell icon-warp"></i>
          <el-dropdown-menu
            slot="dropdown"
            class="dropdown-menu-right-comments"
          >
            <el-dropdown-item>
              回复我的
              <el-badge class="mark message-item-spot" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item>
              收到的赞
              <el-badge class="mark message-item-spot" :value="9" />
            </el-dropdown-item>
            <el-dropdown-item>
              我的消息
              <el-badge class="mark message-item-spot" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navItems: [
        {
          navitem: "首页",
          navpath: "/home",
        },
        {
          navitem: "沸点",
          navpath: "/",
        },
        {
          navitem: "课程",
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