<template>
  <div id="second-comment">
    
    <div class="second_comment_list">
      <div 
      class="second_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
      <span @click="toAuthor(item.author.authorid)">{{item.author.authorname}} 回复</span>
      <span @click="toAuthor(item.author)">  @{{item.authored.authorname}} :</span>
      <span> {{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods:{
    toAuthor,
  }
}
</script>

<style scoped>
.second_comment_list_item{
  width: 762px;
  height: 25px;

  margin-top: 10px;
}
.second_comment_list_item span:nth-child(1) {
  
  color: #b4b4b4;
  font-size: 13px;

  padding: 10px 0 10px 12px;

  cursor: pointer;
}
.second_comment_list_item span:nth-child(2){
  
  color: #008b1d;
  font-size: 14px;

  padding: 10px;
  
  cursor: pointer;
}
.second_comment_list_item span:nth-child(3) {
  color: #b4b4b4;
  font-size: 14px;

  padding: 10px;

}
</style>