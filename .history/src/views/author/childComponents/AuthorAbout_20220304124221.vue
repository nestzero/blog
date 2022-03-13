<template>
  <div id="author-content">
    <div class="author_about">
      <div class="author_subscribe">
        <author-card :essay="essay"></author-card>
      </div>

      <div class="author_about_list">
        <div
          class="author_about_list_item"
          v-for="(item, index) in author_about_list"
          :key="index"
          @click="toEssayList(item.path)"
        >
          <i :class="item.icon"></i>
          <span> {{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="author_list">
    </div>
  </div>
</template>

<script>
import AuthorCard from "@/components/common/AuthorCard";

import AuthorList from "./childComponents/AuthorEssayList";

export default {
  props: {
    essay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    AuthorCard,
    AuthorList,
  },
  data() {
    return {
      author_about_list: [
        { path: "/author_list", name: "他的文章",icon:"iconfont icon-liebiao"},
        { path: "/author_list", name: "他的收藏",icon:"el-icon-star-off"},
        { path: "/author_list", name: "他的评论",icon:"el-icon-chat-round"},
      ],
    };
  },
  created() {},
  methods: {
    toEssayList(path){
      this.$router.push({
        path:'/author_list',
        query:{
          id:this.essay.author.authorid},
      })
    }
  },
  mounted() {},
};
</script>

<style scoped>
#author-content {
  width: 1142px;
  height: 650px;

  margin: auto;
}
.author_about {
  float: left;

  width: 270px;

  margin-top: 20px;
}

.author_about .author_subscribe {
  height: 245px;

  background-color: #fff;
}

.author_about .author_about_list {

  height: 200px;

  background-color: #fff;

  margin-top: 20px;

  padding: 20px 15px;
}
.author_about_list .author_about_list_item{
  position: relative;

  height: 65px;

  font-size: 16px;

  border-bottom: 1px solid #f6f6f6;

}
.author_about_list_item:hover{
  color: #04c4fc;
  cursor: pointer;
}
.author_about_list_item i{
  position: absolute;

  left:6%;
  top:49%;
}
.author_about_list_item span{
  position: absolute;

  left:16%; 
  top:45%;
}
</style>