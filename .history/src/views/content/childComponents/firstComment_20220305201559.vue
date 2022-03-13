<template>
  <div id="first-comment">
    <div>{{comment}}</div>
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
  position: absolute;

  left:60px;
  
  width: 762px;
}
</style>