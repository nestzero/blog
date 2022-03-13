<template>
  <div id="essay">
    <div class="essay_content">
      <div class="essay_content_title">
        
      </div>
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

.essay_content {
  float: left;

  width: 850px;
  height: 650px;

  margin-top: 20px;

  background-color: #fff;
}

</style>