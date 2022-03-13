<template>
  <div id="second-comment">
    
    <div>{{comment[1].author.authorname}}@{{comment[1].authored.authorname}}</div>
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