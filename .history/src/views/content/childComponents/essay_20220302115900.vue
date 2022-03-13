<template>
  <div id="essay">
    <div class="essay_content">
      <div class="essay_content_title">
        <span class="essay_content_title_top">{{ essay.title }}</span>

        <div class="essay_content_title_footer">
          <span class="essay_content_title_item">{{essay.author.authorname}}</span>
          <span class="essay_content_title_item">{{essay.datetime | formatTime}}</span>
          <span class="essay_content_title_item">{{essay.kpi.watch | countNums}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ellipsisSentence from '@/filters/ellipsisSentence';
import ellipsisRemark from '@/filters/ellipsisRemark';
import countNums from '@/filters/countNums';
import formatTime from '@/filters/formatTime';

export default {
  data() {
    return {
      essay: [],
    };
  },
  filters:{
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
.essay_content_title .essay_content_title_top{
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
.essay_content_title .essay_content_title_item{
  position: absolute;

  left:5px
}
</style>