<template>
  <div>{{comment}}</div>
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