export default function getEssayByAuthorId() {
  const authorid = this.$route.query.id;

  this.$api
    .getEssayByAuthorId(authorid)
    .then((res) => {
      this.essay=res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}