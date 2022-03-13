<template>
  <div id="second-comment">
    
    <div>{{comment[0].author.authorname}}@{{comment[0].authored.authorname}}</div>
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