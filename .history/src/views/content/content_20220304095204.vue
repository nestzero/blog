<template>
  <div id="content">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay :essay="essay"></essay>
    <div>{{essay}}</div>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import Essay from "./childComponents/essay";

export default {
  data() {
    return {
      essay: {},
    };
  },
  components: {
    NavTop,
    Essay,
  },
  created() {
  },
  methods: {
  },
  mounted() {
    this.essay = this.$route.query.essay.title;
    console.log(this.$route.query.essay.title);
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>