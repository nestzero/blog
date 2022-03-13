<template>
  <div id="home-content">
    <div class="essay">
      <div class="essay-rank">
        <span class="essay-rank-item"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
#home-content{
  width: 1142px;
  height: 650px;

  margin: auto;
}

#home-content .essay{
  width: 850px;
  height: 650px;

  margin-top: 20px;

  background-color: #fff;
}

.essay .essay-rank{
  height: 50px;

  line-height: 50px;

  border-bottom:1px solid #b3b3b3;
}
.essay-rank .essay-rank-item{

}
</style>