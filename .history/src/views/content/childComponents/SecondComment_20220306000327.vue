<template>
  <div id="second-comment">
    
    <div class="second_comment_list">
      <div 
      class="second_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
      <span>{{item.author.authorname}} 回复</span>
      <span>  {{item.authored.authorname}} :</span>
      <span> {{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    comment:{
      type:Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style scoped>
.second_comment_list_item span:nth-child(1) {
  color: #b4b4b4;
  font-size: 12px;

  padding: 32px 0 12px 12px;

}
.second_comment_list_item span:nth-child(2){
  
  color: #008b1d;
  font-size: 14px;

  padding: 10px;
  
}
.second_comment_list_item span:nth-child(3) {
  color: #b4b4b4;
  font-size: 14px;

  padding: 32px 0 0 10px;

}
</style>