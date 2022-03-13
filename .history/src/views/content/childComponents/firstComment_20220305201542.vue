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

  width: 762px;
}
</style>