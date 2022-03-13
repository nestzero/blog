<template>
  <div id="home-content">
    <div class="essay">

      <div class="essay-rank">
        <div
          class="essay-rank-box"
          v-for="(item, index) in essay_rank_index"
          :key="index"
        >
          <el-dropdown
            size="small"
            placement="top" 
          >
            <span
              class="essay-rank-item"
              :class="{ checked: index == NavIndex }"
              @click="changeRank(index)"
              >{{ item.name }}

              <el-dropdown-menu
                slot="dropdown"
                class="dropdown-menu"
              >
                <el-dropdown-item class="essay-rank-item-dropdown">{{ item.tips }}</el-dropdown-item>
              </el-dropdown-menu>
            </span>
          </el-dropdown>
        </div>
      </div>

      <div class="essay-content" v-for="(item, index) in essay" :key="index">
        <span class="essay-type" v-show="item.type">{{ item.type }}</span>
        <div class="essay-title" @click="toEssay(item)">{{ item.title }}</div>
        <div class="essay-sentence">{{ item.sentence | ellipsisSentence }}</div>

        <div class="essay-footer">
          <span class="essay-author-name">{{ item.author.authorname }}</span>
          <i class="iconfont icon-shijian datetime"></i>
          <span class="essay-datetime">{{ item.datetime | formatTime }}</span>

          <div class="essay-data">
            <span class="essay-data-item">
              <i class="el-icon-view"></i>
              {{ item.kpi.watch | countNums }}
            </span>
            <span class="essay-data-item">
              <i class="el-icon-star-off"></i>
              {{ item.kpi.stars | countNums }}
            </span>
            <span class="essay-data-item">
              <i class="el-icon-chat-round"></i>
              {{ item.kpi.comments | countNums }}
            </span>
          </div>
        </div>

      </div>

    </div>

    <div class="recommend">
      <div class="recommend-card">
        <el-card>
          <i class="el-icon-date icon-wrap" />
          <span class="card-word">{{ greeting }}</span>
          <el-button type="primary" class="card-button" size="small" round
            >去签到</el-button
          >
          <span class="card-sentence">点亮你在社区的每一天</span>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import ellipsisSentence from "@/filters/ellipsisSentence";
import ellipsisRemark from "@/filters/ellipsisRemark";
import countNums from "@/filters/countNums";
import formatTime from "@/filters/formatTime";

import toEssay from "@/js/toEssay";

export default {
  props: {
    essay: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    ellipsisSentence,
    ellipsisRemark,
    countNums,
    formatTime,
  },
  data() {
    return {
      essay_rank_index: [
        {
          name: "最近",
          tips: "发布时间排序",
        },
        {name:"|"},
        { name: "投票", tips: "点赞次数排序" },
        {name:"|"},
        { name: "热门", tips: "评论次数排序" },
      ],
      NavIndex: 0,
      greeting: "",
    };
  },
  methods: {
    changeRank(index) {
      this.NavIndex = index;
    },
    countDateTime() {
      const date = new Date();
      const hour = date.getHours();

      if (hour >= 6 && hour < 9) {
        this.greeting = "早上好!";
      } else if (hour >= 9 && hour < 12) {
        this.greeting = "上午好!";
      } else if (hour >= 12 && hour < 14) {
        this.greeting = "中午好!";
      } else if (hour >= 14 && hour < 18) {
        this.greeting = "下午好!";
      } else if (hour >= 18 && hour < 20) {
        this.greeting = "傍晚好!";
      } else {
        this.greeting = "晚上好!";
      }
    },
    toEssay,
  },
  mounted() {
    this.countDateTime();
  },
};
</script>

<style scoped>
#home-content {
  width: 1142px;
  height: 650px;

  margin: auto;
}

#home-content .essay {
  float: left;

  width: 850px;

  margin-top: 20px;

  background-color: #fff;
}

.essay .essay-rank {
  height: 50px;

  line-height: 50px;

  border-bottom: 1px solid #f6f6f6;

  padding-left: 25px;
}
.essay-rank .essay-rank-box {
  display: inline-block;
}
.essay-rank .essay-rank-item {
  color: #b3b3b3;
  font-size: 14px;

  margin-right: 15px;
}
.dropdown-menu{
  background-color: #ffffff;

  border-radius: 10%;
  margin-right: 40px;
  margin-top: 10px;
}

.essay-rank-item-dropdown{

  color: black;
  font-size: 12px;
  font-family: 'Microsoft Yahei';

}

.essay-rank-item:nth-child(1):hover {
  cursor: pointer;
}
.essay-rank-item:nth-child(3):hover {
  cursor: pointer;
}
.essay-rank-item:nth-child(5):hover {
  cursor: pointer;
}

.essay-content {
  height: 145px;

  border-bottom: 1px solid #f6f6f6;

  padding: 30px 20px 20px 20px;
}
.essay-content .essay-type {
  float: left;

  height: 20px;

  line-height: 20px;
  font-size: 10px;
  font-weight: bold;
  font-family: "Microsoft Yahei";
  color: #999999;

  background-color: #f6f6f6;
  border-radius: 10%;

  padding: 1px 5px;
  margin-right: 8px;
}
.essay-content .essay-title {
  width: 560px;

  color: #1c242c;
  font-weight: bold;
  font-size: 16px;
}
.essay-title:hover {
  color: #04c4fc;
  cursor: pointer;
}
.essay-content .essay-sentence {
  height: 40px;

  color: #666666;
  font-size: 16px;
  font-family: "Mircosoft Yahei";
  text-align: left;

  margin-top: 30px;
}

.essay-content .essay-footer {
  position: relative;

  width: 800px;
  height: 20px;

  line-height: 20px;

  float: left;

  margin-top: 30px;
}
.essay-footer .essay-author-name {
  color: #999999;
  font-size: 15px;
  text-align: left;
}
.essay-author-name:hover {
  cursor: pointer;
}
.essay-footer .essay-datetime {
  position: absolute;

  left: 120px;

  color: #999999;
  font-size: 15px;
}
.essay-footer .datetime {
  position: absolute;

  top: 1px;
  left: 98px;

  color: grey;
  font-size: 20px;
}

.essay-footer .essay-data {
  float: right;

  color: #999999;
  font-size: 15px;
}

.recommend {
  float: right;

  width: 240px;

  margin-top: 20px;
}
.recommend .recommend-card {
  width: 240px;
  height: 100px;

  padding: 0 0 25px 18px;
}
.recommend-card .card-word {
  font-size: 20px;

  margin-left: 10px;
}
.recommend-card .card-sentence {
  display: block;

  text-align: center;
  font-size: 15px;

  margin-top: 10px;
}
.recommend-card .card-button {
  color: #40bcfc;
  text-align: center;
  background-color: #ffffff;

  margin-left: 25px;
}

.icon-wrap {
  color: #fccc8c;
  font-size: 20px;
}

.checked {
  color: #04c4fc !important;
}
</style>