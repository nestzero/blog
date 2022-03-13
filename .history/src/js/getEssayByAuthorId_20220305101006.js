export default function getEssayByAuthorId() {
  const authorid=this.$route.query.id;

  console.log();

  this.$api
    .getEssayByAuthorId(this.queryInfo,authorid)
    .then((res) => {
      this.essay=res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}