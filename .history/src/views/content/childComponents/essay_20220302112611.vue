<template>
  <div id="essay">
    <div class="essay_title">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      essay:[]
    }
  },
  mounted(){
    this.essay=JSON.parse(window.sessionStorage.getItem('essay'));
  }
}
</script>

<style scoped>
#essay{
  width: 1142px;
  height: 650px;

  margin: auto;
}

</style>