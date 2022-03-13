<template>
  <div id="first-comment">
    <div class="first-comment-list">
      <div 
      class="first-comment-list-item"
      v-for="(item,index) in comment"
      :key="index"
      >
        <span>{{item.author.authorname}}</span>
        <span>{{item.content}}</span>
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
  }
}
</script>

<style scoped>
#first-comment{
  
  width: 762px;

  background-color: #f4f4f4;

  margin-left: 60px;
}
.comment_list_item span:nth-child(3) {
  position: absolute;

  left: 130px;
  top: 25px;

  color: #b4b4b4;
  font-size: 14px;
}
.comment_list_item span:nth-child(4){
  position: absolute;

  left:60px;
  top:50px;

  width: 762px;

  color: #b4b4b4;
  font-size: 14px;
}
</style>