export default function getEssayByAuthorId() {
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