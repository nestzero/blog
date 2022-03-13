<template>
  <div id="author-content">
    {{essay}}
  </div>
</template>

<script>
export default {
  props:{
    essay: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
    }
  },
  created(){
    
  },
  methods:{

  },
  mounted(){
  }
}
</script>

<style scoped>

</style>