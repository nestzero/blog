<template>
  <div id="author">
    <div class="navTop">
      <nav-top></nav-top>
    </div>

    <author-content></author-content>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop";
import AuthorContent from "./childComponents/AuthorContent";

export default {
  data() {
    return {};
  },
  components: {
    NavTop,
    AuthorContent,
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>