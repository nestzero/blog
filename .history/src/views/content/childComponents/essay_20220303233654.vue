<template>
  <div id="essay">
    <!-- <div class="essay_content">
      <div class="essay_content_title">
        <span class="essay_content_title_top">{{ essay.title }}</span>

        <div class="essay_content_title_footer">
          <span class="essay_content_title_item">{{essay.author.authorname}}</span>
          <span class="essay_content_title_item">{{ essay.datetime | formatTime }} ·</span>
          <span class="essay_content_title_item">{{ essay.kpi.watch | countNums }} 阅读</span>
        </div>
      </div>

      <div class="essay_content_mainbody">{{ essay.sentence }}</div>
    </div> -->

    <div class="essay_content_recommend">
      <!-- <div class="essay_content_author">
        <div class="essay_content_authorname">
          <span @click="toAuthor('/author', essay.author.authorid)">{{essay.author.authorname}}</span>
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

        <div class="essay_content_star">
          <div class="essay_content_box">
            <i class="el-icon-star-off"></i>
            <span>收藏</span>
            <span>{{ essay.kpi.stars | countNums }}</span>
          </div>
        </div>
      </div> -->

      <div class="essay_content_rank">
        <div class="essay_rank_title">
          <i class="iconfont icon-remen remen"></i>
          <span>热门文章</span>
        </div>

        <div class="essay_content_list">
          <div
            v-for="(item, index) in essayRankList"
            :key="index"
            class="essay_content_list_item"
            @click="toEssay('/essay', item.essayid)"
          >
            {{ index + 1 }}. <span>{{ item.title | ellipsisRemark }}</span>
          </div>
        </div>
      </div>
    </div>

    <div>{{essay.author}}</div>
  </div>
</template>

<script>
import ellipsisSentence from "@/filters/ellipsisSentence";
import ellipsisRemark from "@/filters/ellipsisRemark";
import countNums from "@/filters/countNums";
import formatTime from "@/filters/formatTime";

import toEssay from '@/js/toEssay'
import toAuthor from '@/js/toAuthor'

export default {
  props:{
    essay: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      essayRankList: [],
    };
  },
  filters: {
    ellipsisSentence,
    ellipsisRemark,
    countNums,
    formatTime,
  },
  created() {
    this.getEssayByRank();
  },
  methods: {
    getEssayByRank() {
      this.$api
        .getEssayByKpiRank()
        .then((res) => {
          this.essayRankList = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toEssay,
    toAuthor
  },
  mounted() {
    console.log(this.essay.title);
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
.essay_content_mainbody {
  width: 100%;

  font-family: "Microsoft Yahei";

  padding: 23px;
}

.essay_content_recommend {
  float: right;

  width: 270px;

  margin-top: 20px;
}

.essay_content_recommend .essay_content_author {
  height: 295px;

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

  width: 80px;
  height: 20px;

  left: 50%;
  top: 120px;

  margin-left: -40px;
}

.essay_content_subscribe {
  position: relative;

  height: 50px;

  border-bottom: 1px solid #f6f6f6;

  padding: 18px;
}
.essay_content_subscribe_left {
  position: absolute;
  left: 10%;
  top: 5px;

  float: left;

  text-align: center;
}
.essay_content_subscribe_left span {
  color: #00bdc0;

  font-size: 40px;
}
.essay_content_subscribe_left div {
  color: grey;

  font-size: 14px;
}

.essay_content_subscribe_right {
  position: absolute;
  right: 10%;
  top: 5px;

  float: right;

  text-align: center;
}
.essay_content_subscribe_right span {
  color: #00bdc0;

  font-size: 40px;
}
.essay_content_subscribe_right div {
  color: grey;

  font-size: 14px;
}

.essay_content_subscribe_line {
  position: absolute;
  top: 15px;
  left: 130px;

  color: grey;
  font-size: 40px;
}
.essay_content_kpi {
  height: 80px;

  border-bottom: 1px solid #f6f6f6;
}

.essay_content_star {
  position: relative;

  height: 50px;
}
.essay_content_star .essay_content_box {
  position: absolute;
  left: 50%;
  top: 50%;

  width: 100px;
  height: 30px;

  line-height: 30px;
  text-align: center;
  font-size: 14px;

  margin-left: -50px;
  margin-top: -17px;

  border: 1px solid #f6f6f6;
}
.essay_content_box span {
  margin-left: 5px;
}

.essay_content_recommend .essay_content_rank {
  height: 340px;

  background-color: #fff;

  margin-top: 20px;
}

.essay_content_rank .essay_rank_title {
  position: relative;

  height: 40px;

  padding: 12px 15px;

  border-bottom: 1px solid #f6f6f6;
}
.essay_rank_title .remen {
  position: absolute;
  left: 20px;
  top: 15px;

  color: #ff3300;
  font-size: 35px;
}
.essay_rank_title span {
  position: absolute;
  left: 60px;
  top: 16px;

  font-size: 25px;
  font-family: "Microsoft Yahei";
}
.essay_content_list {
  font-size: 15px;
  font-family: "Microsoft Yahei";

  padding: 15px 18px;
}
.essay_content_list_item {
  margin-bottom: 12px;
}
.essay_content_list_item span:hover {
  color: #40bcfc;
  cursor: pointer;
}
</style>