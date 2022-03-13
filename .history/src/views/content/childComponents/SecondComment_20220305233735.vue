<template>
  <div id="second-comment">
    
    <div class="second_comment_list">
      <div 
      class="second_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
      <span>{{item.author.authorname}}</span> 回复 {{item.authored.authorname}}
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

</style>