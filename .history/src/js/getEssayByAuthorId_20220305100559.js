export default function getEssayByAuthorId() {
  const authorid=this.$route.id;
  this.queryInfo.query = +this.$route.query.id;

  this.$api
    .getEssayByAuthorId(this.queryInfo)
    .then((res) => {
      this.essay=res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}