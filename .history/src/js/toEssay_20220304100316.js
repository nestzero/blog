export default function toEssay(path, id) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve(
      {
        path: '/essay',
        query: {essayid:id}
      });
    window.open(href, '_blank');
  } else if (this.$route.path == path) {
    this.$router.push({
      path: '/essay',
      query: item
    });
  } else {
    this.$router.push(path);
  }

}