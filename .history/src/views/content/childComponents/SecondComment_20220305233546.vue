<template>
  <div id="second-comment">
    
    <div class="second_comment_list">
      <div 
      class="first_comment_list_item"
      v-for="(item,index) in comment"
      :key="index"
      >
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