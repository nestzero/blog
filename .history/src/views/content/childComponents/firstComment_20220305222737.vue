<template>
  <div id="first-comment">
    <div class="first_comment_list">
      <div 
      class="first_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
        <span>{{item.author.authorname}}</span>
        <span>: {{item.content}}</span>
        
         <second-comment :comment="item.comment"></second-comment>
      </div>
    </div>
    
  </div>
</template>

<script>
import SecondComment from "./SecondComment";

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
.first_comment_list{
}
.first_comment_list_item span:nth-child(1) {
  color: #008b1d;
  font-size: 12px;

  padding-left: 12px;
  padding: 12px 0;
}
.first_comment_list_item span:nth-child(2){
  color: #b4b4b4;
  font-size: 14px;

  padding: 12px 0;
}
</style>