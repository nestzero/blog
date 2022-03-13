<template>
  <div id="author_essay_list">
    <div class="author_essay_title">
      <span>他的文章</span>
    </div>

    <div class="author_list">
      <div class="author__essay_list_item">

      </div>
    </div>

    <div>{{essay}}</div>
  </div>
</template>

<script>
export default {
  inject:['essay_list'],
  data(){
    return{
      essay:this.essay
    }
  },
  mounted() {
  },
};
</script>

<style scoped>
.author_essay_title {
  position: relative;

  height: 45px;

  padding: 5px 15px;

  border-bottom: 1px solid #f6f6f6;
}
.author_essay_title span {
  position: absolute;

  top: 30%;

  font-size: 15px;
}
</style>