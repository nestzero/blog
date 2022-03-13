<template>
  <div id="content">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay :essay="essay[0]"></essay>

  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import Essay from "./childComponents/essay";

export default {
  inject:['reload'],
  data() {
    return {
      essay: [],
    };
  },
  components: {
    NavTop,
    Essay,
  },
  created() {
    this.getEssayByEssayId();
  },
  methods: {
    getEssayByEssayId() {
      const essayid = this.$route.query.essayid;

      this.$api
        .getEssayByEssayId(essayid)
        .then((res) => {
          this.essay = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    back(){
      this.reload();
    }
  },
  mounted() {
    if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL)
				window.addEventListener('popstate', this.back, false)
			}
————————————————
版权声明：本文为CSDN博主「鸣拙」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45939191/article/details/108369287
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>