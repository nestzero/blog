<template>
  <div id="author-content">
    <!-- <author-card :essay="essay"></author-card> -->
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

</style>