<template>
  <div id="home-content">
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
        <div class="essay-sentence">{{item.sentence}}</div>

        <div class="essay-footer">
          <span class="essay-author-name">{{item.author.authorname}}</span>
        </div>
      </div>
    </div>
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
#home-content {
  width: 1142px;
  height: 650px;

  margin: auto;
}

#home-content .essay {
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
  font-family: 'Microsoft Yahei';
  color:#999999;

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
.essay-content .essay-sentence{

  color:#b3b3b3;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Mircosoft Yahei';
  text-align: left;

  margin-top: 20px;
}

.essay-footer

.checked {
  color: #04c4fc !important;
}
</style>