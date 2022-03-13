<template>
  
</template>

<script>
import Nav from '@/components/common/Nav'

export default {
  data() {
    return {
      essay: [],
      queryInfo: {
        pageNum: 1, //当前页
        pageSize: 6, //每页最大数
      },
    };
  },
  components: {
    Nav,
  },
  created() {
    this.getAllEssay();
  },
  methods: {
    getAllEssay() {
      this.$api.getAllEssay(this.queryInfo).then((res) => {
        this.essay = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  mounted() {
  },
};
</script>
<style scoped>

</style>