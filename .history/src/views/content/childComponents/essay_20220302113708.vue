<template>
  <div id="essay">
    <div class="essay_content">
      <div class="essay_content_title">
        {{ essay.title }}

        <div class="essay_content_title_footer">
          <span class="essay_content_title_item">{{
            essay.author.authorname
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      essay: [],
    };
  },
  mounted() {
    this.essay = JSON.parse(window.sessionStorage.getItem("essay"));
  },
};
</script>

<style scoped>
#essay {
  width: 1142px;
  height: 650px;

  margin: auto;
}

.essay_content {
  float: left;

  width: 850px;
  height: 650px;

  margin-top: 20px;

  background-color: #fff;
}
.essay_content .essay_content_title {
  height: 95px;

  font-size: 25px;
  font-family: "Microsoft Yahei";

  border-bottom: 1px solid #f6f6f6;

  padding: 25px 25px;
}
.essay_content_title .essay_content_title_footer {
  height: 20px;
}
</style>