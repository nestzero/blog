<template>
  <div id="author-content">
    <div class="author_about">
      <div class="author_subscribe">
        <author-card :essay="essay[0]"></author-card>
      </div>

      <div class="author_about_list">
        <div
          class="author_about_list_item"
          v-for="(item, index) in author_about_list"
          :key="index"
          @click="toListByPath(item.path,essay[0].author.authorid)"
        >
          <i :class="item.icon"></i>
          <span> {{ item.name }}</span>
        </div>
      </div>
    </div>

    <div class="author_list" v-if="this.$route.path === '/author_essay_list'">
      <author-essay-list></author-essay-list>
    </div>
    <div
      class="author_list"
      v-else-if="this.$route.path === '/author_stars_list'"
    >
      <author-stars-list></author-stars-list>
    </div>
    <div class="author_list" v-else>
      <author-comments-list></author-comments-list>
    </div>
  </div>
</template>

<script>
import AuthorCard from "@/components/common/AuthorCard";

import AuthorEssayList from "./childComponents/AuthorEssayList";
import AuthorStarsList from "@/components/content/author/AuthorStarsList";
import AuthorCommentsList from "@/components/content/author/AuthorCommentsList";

export default {
  props: {
    essay: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    AuthorCard,
    AuthorEssayList,
    AuthorStarsList,
    AuthorCommentsList,
  },
  data() {
    return {
      author_about_list: [
        {
          path: "/author_essay_list",
          name: "他的文章",
          icon: "iconfont icon-liebiao",
        },
        {
          path: "/author_stars_list",
          name: "他的收藏",
          icon: "el-icon-star-off",
        },
        {
          path: "/author_comments_list",
          name: "他的评论",
          icon: "el-icon-chat-round",
        },
      ],
    };
  },
  created() {},
  methods: {
    toListByPath(path,id) {
      this.$router.push({
        path: path,
        query:{id:id}
      });
    },
  },
  mounted() {
  },
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
.author_about_list .author_about_list_item {
  position: relative;

  height: 65px;

  font-size: 16px;

  border-bottom: 1px solid #f6f6f6;
}
.author_about_list_item:hover {
  color: #04c4fc;
  cursor: pointer;
}
.author_about_list_item i {
  position: absolute;

  left: 6%;
  top: 49%;
}
.author_about_list_item span {
  position: absolute;

  left: 16%;
  top: 45%;
}

.author_list {
  float: right;

  width: 860px;

  margin-top: 20px;

  background-color: #fff;
}
</style>