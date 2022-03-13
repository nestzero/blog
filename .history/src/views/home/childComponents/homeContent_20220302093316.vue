<template>
  <div class="home-content">
    <div class="essay">
      <div class="essay-rank">
        <span
          v-for="(item, index) in essay_rank_index"
          :key="index"
          class="essay-rank-item"
          :class="{ checked: index == NavIndex }"
          @click="changeRank(index)"
          >{{ item }}</span
        >
      </div>

      <div class="essay-content" v-for="(item, index) in essay" :key="index">
        <span class="essay-type" v-show="item.type">{{ item.type }}</span>
        <div class="essay-title">{{ item.title }}</div>
        <div class="essay-sentence">{{ item.sentence | ellipsisSentence }}</div>

        <div class="essay-footer">
          <span class="essay-author-name">{{ item.author.authorname }}</span>
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

    <div class="center-recommend">
        <div class="center-recommend-item">
          <el-card :body-style="{ padding: '14px 16px 17px 20px' }">
            <div class="center-card">
              <i class="el-icon-date icon-wrap" />
              <span class="center-card-word">{{ greeting }}</span>
              <el-button
                type="primary"
                class="center-card-button"
                size="small"
                round
                >去签到</el-button
              >
              <span class="center-card-sentence">点亮你在社区的每一天</span>
            </div>
            <div></div>
          </el-card>
  </div>
</template>

<script>
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
    ellipsisSentence(value) {
      if (!value) return "";

      if (value.length > 50) {
        return value.slice(0, 50) + "...";
      }

      return value;
    },
    ellipsisRemark(value) {
      if (!value) return "";

      if (value.length > 11) {
        return value.slice(0, 11) + "...";
      }

      return value;
    },
    countNums(value) {
      value = value.toString();

      if (!value) return "";

      if (value.length === 4) {
        let num1 = value.slice(0, 1);
        let num2 = value.slice(1, 2);

        return num1 + "." + num2 + "k";
      } else if (value.length === 5) {
        let num1 = value.slice(0, 1);
        let num2 = value.slice(1, 2);

        return num1 + "." + num2 + "w";
      } else if (value.length === 6) {
        let num1 = value.slice(0, 1);
        let num2 = value.slice(1, 2);

        return num1 + num2 + "w";
      } else {
        return value;
      }
    },
    formatTime(valueTime) {
      if (valueTime) {
        let newData = Date.parse(new Date());
        let diffTime = Math.abs(newData - valueTime);

        if (diffTime > 7 * 24 * 3600 * 1000) {
          let date = new Date(valueTime);
          let y = date.getFullYear();
          let m = date.getMonth() + 1;

          m = m < 10 ? "0" + m : m;

          let d = date.getDate();
          d = d < 10 ? "0" + d : d;

          let h = date.getHours();
          h = h < 10 ? "0" + h : h;

          let minute = date.getMinutes();
          let second = date.getSeconds();

          minute = minute < 10 ? "1" + minute : minute;
          second = second < 10 ? "0" + second : second;

          return m + "-" + d + " " + h + ":" + minute;
        } else if (
          diffTime < 7 * 24 * 3600 * 1000 &&
          diffTime > 24 * 3600 * 1000
        ) {
          //注释("一周之内");
          // let time = newData - diffTime;
          let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));

          return dayNum + "天前";
        } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
          //注释("一天之内");
          // let time = newData - diffTime;
          let dayNum = Math.floor(diffTime / (60 * 60 * 1000));

          return dayNum + "小时前";
        } else if (diffTime < 3600 * 1000 && diffTime > 0) {
          // 注释("一小时之内");
          // let time = newData - diffTime;
          let dayNum = Math.floor(diffTime / (60 * 1000));

          return dayNum + "分钟前";
        }
      }
    },
  },
  data() {
    return {
      essay_rank_index: ["最近", "|", "投票", "|", "热门"],
      NavIndex: 0,
    };
  },
  methods: {
    changeRank(index) {
      this.NavIndex = index;
    },
  },
};
</script>

<style scoped>
.home-content {
  width: 1142px;
  height: 650px;

  margin: auto;
}

.home-content .essay {
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
.essay-rank .essay-rank-item {
  color: #b3b3b3;
  font-size: 14px;

  margin-right: 15px;
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
  height: 155px;

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
.essay-content .essay-sentence {
  color: #b3b3b3;
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

  margin-top: 50px;
}
.essay-footer .essay-author-name {
  color: #999999;
  font-size: 15px;
  text-align: left;

  margin-right: 40px;
}
.essay-footer .essay-datetime {
  color: #999999;
  font-size: 15px;
}
.essay-footer .essay-data {
  float: right;

  color: #999999;
  font-size: 15px;
}

.checked {
  color: #04c4fc !important;
}
</style>