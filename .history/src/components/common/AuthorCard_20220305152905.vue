<template>
  <div id="author-card">
    <div class="essay_content_authorname">
      <span @click="toAuthor(essay.author.authorid)">{{essay.author.authorname}}</span>
      <img 
       :src="'http://localhost:9090/api/file/' + essay.author.pic"
       alt="">
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
  </div>
</template>

<script>
import countNums from "@/filters/countNums";

import toAuthor from '@/js/toAuthor';

export default {
  props:{
    essay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    countNums
  },
  methods:{
    toAuthor
  },
  mounted(){
  }
};
</script>

<style scoped>
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

  width: 100px;
  height: 20px;

  left: 50%;
  top: 120px;

  margin-left: -50px;
}
.essay_content_authorname img{
  position: absolute;

  width: 82px;
  height: 82px;

  border-radius: 50%;
}

.essay_content_subscribe {
  position: relative;

  height: 50px;

  border-bottom: 1px solid #f6f6f6;

  padding: 18px;
}
.essay_content_subscribe_left {
  position: absolute;
  left: 12%;
  top: 5px;

  width: 70px;

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
  right: 15%;
  top: 5px;

  width: 70px;

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
</style>