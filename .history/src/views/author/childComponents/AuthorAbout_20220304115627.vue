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
          <span> {{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorCard from "@/components/common/AuthorCard";

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
  },
  data() {
    return {
      author_about_list: [
        { path: "/author_list", name: "他的文章" },
        { path: "/author_list", name: "他的收藏" },
        { path: "/author_list", name: "他的评论" },
      ],
    };
  },
  created() {},
  methods: {},
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
  width: 260px;
  height: 200px;

  background-color: #fff;

  margin-top: 20px;
}
</style>