<template>
  <div id="author-card">
    
  </div>
  <div class="essay_content_authorname">
    <span @click="toAuthor('/author', essay.author.authorid)">{{
      essay.author.authorname
    }}</span>
  </div>

  <div class="essay_content_subscribe">
    <div class="essay_content_subscribe_left">
      <span>{{ essay.author.subscribe | countNums }}</span>
      <div>关注</div>
    </div>
    <span class="essay_content_subscribe_line">|</span>
    <div class="essay_content_subscribe_right">
      <span>{{ essay.author.subscribed | countNums }}</span>
      <div>被关注</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>