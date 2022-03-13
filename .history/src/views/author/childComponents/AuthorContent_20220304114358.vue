<template>
  <div id="author-content">
    <div class="essay_content_recommend">

      <div class="essay_content_author">
        <author-card :essay="essay"></author-card>
      </div>
      
      <div></div>
    </div>
    
  </div>
</template>

<script>
import AuthorCard from '@/components/common/AuthorCard';

export default {
  props:{
    essay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components:{
    AuthorCard,
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
#author-content {
  width: 1142px;
  height: 650px;

  margin: auto;
}
.essay_content_recommend {
  float: left;

  width: 270px;

  margin-top: 20px;
}

.essay_content_recommend .essay_content_author {
  height: 245px;

  background-color: #fff;
}


</style>