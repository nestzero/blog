<template>
  <div id="home-content">
    <div class="essay">
      <div class="essay-rank">
        <span class="essay-rank-item">最近</span>
        <span class="essay-rank-item">|</span>
        <span class="essay-rank-item">投票</span>
        <span class="essay-rank-item">|</span>
        <span class="essay-rank-item">热门</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      NavIndex: 0,
    }
  },
  methods:{
    changeRank(index) {
      this.NavIndex = index;
    },
  }
}
</script>

<style scoped>
#home-content{
  width: 1142px;
  height: 650px;

  margin: auto;
}

#home-content .essay{
  width: 850px;
  height: 650px;

  margin-top: 20px;

  background-color: #fff;
}

.essay .essay-rank{
  height: 50px;

  line-height: 50px;

  border-bottom:1px solid #b3b3b3;

  padding-left: 25px;
}
.essay-rank .essay-rank-item{

  color: #b3b3b3;
  font-size: 14px;

  margin-right: 12px;
}

</style>