<template>
  <div id="essay">
    <div class="essay_content">
      <div class="essay_content_title">
        <span class="essay_content_title_top">{{ essay.title }}</span>

        <div class="essay_content_title_footer">
          <span class="essay_content_title_item">{{
            essay.author.authorname
          }}</span>
          <span class="essay_content_title_item"
            >{{ essay.datetime | formatTime }} ·</span
          >
          <span class="essay_content_title_item"
            >{{ essay.kpi.watch | countNums }} 阅读</span
          >
        </div>
      </div>
    </div>

    <div class="essay_content_recommend">
      <div class="essay_content_author">
        <div class="essay_content_authorname">
          <span>{{ essay.author.authorname }}</span>
        </div>

        <div class="essay_content_subscribe">
          <div class="essay_content_subscribe_left">
            <span>{{ essay.author.subscribe }}</span>
            <div>关注</div>
          </div>
          <span class="essay_content_subscribe_line">|</span>
          <div class="essay_content_subscribe_right">
            <span>{{ essay.author.subscribed }}</span>
            <div>被关注</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ellipsisSentence from "@/filters/ellipsisSentence";
import ellipsisRemark from "@/filters/ellipsisRemark";
import countNums from "@/filters/countNums";
import formatTime from "@/filters/formatTime";

export default {
  data() {
    return {
      essay: [],
    };
  },
  filters: {
    ellipsisSentence,
    ellipsisRemark,
    countNums,
    formatTime,
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

  border-bottom: 1px solid #f6f6f6;

  padding: 25px 25px;
}
.essay_content_title .essay_content_title_top {
  font-size: 25px;
  font-family: "Microsoft Yahei";
}
.essay_content_title .essay_content_title_footer {
  position: relative;

  height: 20px;

  line-height: 20px;
  color: #999999;
  font-size: 15px;

  margin-top: 30px;
}
.essay_content_title .essay_content_title_item:first-child {
  position: absolute;

  left: 5px;
}
.essay_content_title_item:nth-child(2) {
  position: absolute;

  left: 100px;
}
.essay_content_title_item:nth-child(3) {
  position: absolute;

  left: 155px;
}

.essay_content_recommend {
  float: right;

  width: 270px;

  margin-top: 20px;
}
.essay_content_recommend .essay_content_author {
  height: 290px;

  background-color: #fff;
}
.essay_content_authorname {
  position: relative;

  display: block;

  width: 100%;
  height: 160px;

  font-size: 16px;
  font-family: "Microsoft Yahei";

  text-align: center;

  border-bottom: 1px solid #f6f6f6;
}
.essay_content_authorname span {
  position: absolute;

  left: 95px;
  top: 120px;
}
.essay_content_subscribe{
  padding: 18px;
}
.essay_content_subscribe_left{
  float: left;
}
.essay_content_subscribe_right{
  float: right;
}
.essay_content_subscribe_line{
  font-size: 40px;
}
.essay_content_kpi {
  height: 80px;

  border-bottom: 1px solid #f6f6f6;
}
</style>