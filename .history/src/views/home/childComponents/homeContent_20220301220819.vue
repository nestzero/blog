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

      <div 
      class="essay-content"
      v-for="(item,index) in essay"
      :key="index"
      >
        <div class="essay-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    essay:{
      type:Array,
      default(){
        return [];
      }
    }
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

.essay-content{
  position: relative;

  height:155px;

  line-height:155px;

  border-bottom: 1px solid #f6f6f6;
}
.essay-content .essay-title {
  position: absolute;
  left:50%;

  width: 560px;

  color: #1c242c;
  font-weight: bold;
  font-size: 16px;

  ml
}


.checked {
  color: #04c4fc !important;
}
</style>