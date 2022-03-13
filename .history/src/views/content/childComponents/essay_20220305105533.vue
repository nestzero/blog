<template>
  <div id="essay">
    <div class="essay_content">
      <div class="essay_content_title">
        <span class="essay_content_title_top">{{ essay.title }}</span>

        <div class="essay_content_title_footer">
          <span class="essay_content_title_item">{{essay.author.authorname}}</span>
          <span class="essay_content_title_item">{{ essay.datetime | formatTime }} ·</span>
          <span class="essay_content_title_item">{{ essay.kpi.watch | countNums }} 阅读</span>
        </div>
      </div>

      <div class="essay_content_mainbody">{{ essay.sentence }}</div>
    </div>

    <div class="essay_content_recommend">
      <div class="essay_content_author">
        
        <author-card :essay="essay"></author-card>

        <div class="essay_content_star">
          <div class="essay_content_box">
            <i class="el-icon-star-off"></i>
            <span>收藏</span>
            <span>{{ essay.kpi.stars | countNums }}</span>
          </div>
        </div>
      </div>

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
            @click="toEssay(item.essayid)"
          >
            {{ index + 1 }}. <span>{{ item.title | ellipsisRemark }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AuthorCard from '@/components/common/AuthorCard';

import ellipsisSentence from "@/filters/ellipsisSentence";
import ellipsisRemark from "@/filters/ellipsisRemark";
import countNums from "@/filters/countNums";
import formatTime from "@/filters/formatTime";

import toEssay from '@/js/toEssay'

export default {
  props:{
    essay: {
      type: Object,
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
  components:{
    AuthorCard,
  },
  filters: {
    ellipsisSentence,
    ellipsisRemark,
    countNums,
    formatTime,
  },
  created() {
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
  },
  mounted() {
    this.getEssayByRank();
  },
  activated(){
  }
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
  width: 820px;

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