<template>
  <div id="first-comment">
    <div class="first-comment-list">
      <div class="first-comment-list-item">
        
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

  background-color: grey;

  margin-left: 60px;
}
</style>