<template>
  <div id="content">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <essay :essay="essay[0]"></essay>
    <div>{{this.$route.query.essay}}</div>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import Essay from "./childComponents/essay";

export default {
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
  },
  methods: {
  },
  mounted() {
    this.essay = this.$route.query.essay;
  },
};
</script>

<style scoped>
.navTop {
  background-color: #fff;
}
</style>