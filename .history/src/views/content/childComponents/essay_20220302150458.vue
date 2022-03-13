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
            <span>{{ essay.author.subscribe |countNums}}</span>
            <div>关注</div>
          </div>
          <span class="essay_content_subscribe_line">|</span>
          <div class="essay_content_subscribe_right">
            <span>{{ essay.author.subscribed |countNums}}</span>
            <div>被关注</div>
          </div>
        </div>

        <div class="essay_content_star">
          <div class="essay_content_box">
            <i></i>
            <span>收藏</span>
            <span>{{essay.kpi.star}}</span>
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
  position: relative;

  height: 50px;

  border-bottom: 1px solid #f6f6f6;

  padding: 10px 18px;
}
.essay_content_subscribe_left{
  position: absolute;
  left:70px;
  top:10px;

  float: left;

  text-align: center;
}
.essay_content_subscribe_left span{
  color:#00bdc0;

  font-size: 40px;
}
.essay_content_subscribe_left div{
  color:grey;

  font-size: 14px;
}

.essay_content_subscribe_right{
  position: absolute;
  left:165px;
  top:10px;

  float: right;
  
  text-align: center;
}
.essay_content_subscribe_right span{
  color:#00bdc0;

  font-size: 40px;
}
.essay_content_subscribe_right div{
  color:grey;

  font-size: 14px;
}


.essay_content_subscribe_line{
  position: absolute;
  left:130px;

  color: grey;
  font-size: 40px;
}
.essay_content_kpi {
  height: 80px;

  border-bottom: 1px solid #f6f6f6;
}

.essay_content_star{
  height: 50px;
}
</style>