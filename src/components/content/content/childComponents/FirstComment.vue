<template>
  <div id="first-comment">
    <div class="first_comment_list">
      <div 
      class="first_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
        <span @click="toAuthor(item.author.authorid)">{{item.author.authorname}}</span>
        <span>: {{item.content}}</span>
        
        <second-comment :comment="item.comment"></second-comment>
      </div>
    </div>
    

  </div>
</template>

<script>
import SecondComment from "./SecondComment";

import toAuthor from "@/js/toAuthor";

export default {
  props:{
    comment:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    SecondComment,
  },
  methods:{
    toAuthor
  }
}
</script>

<style scoped>
#first-comment{
  width: 762px;

  background-color: #f4f4f4;

  margin-top: 10px;
  margin-left: 60px;
}
.first_comment_list_item{
  padding: 5px 0;
}
.first_comment_list_item:first-child{
  padding: 10px 0 0 0;
}
.first_comment_list_item:last-child{
  padding: 0 0 10px 0;
}

.first_comment_list_item span:nth-child(1) {
  color: #008b1d;
  font-size: 12px;

  padding: 15px 0 12px 12px;

}
.first_comment_list_item span:nth-child(1):hover{
  cursor: pointer;
}
.first_comment_list_item span:nth-child(2){
  color: #b4b4b4;
  font-size: 14px;

  padding: 15px 0;
}
</style>