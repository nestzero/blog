<template>
  <div id="second-comment">
    
    <div>{{comment[].author.authorname}}@{{comment.authored.authorname}}</div>
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