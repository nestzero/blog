export default function toEssay(path, item) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve(
      {
        path: '/essay',
        params: item
      });
    window.open(href, '_blank');
  } else if (this.$route.path == path) {
    this.$router.push({
      path: '/essay',
      params: {item}
    });
  } else {
    this.$router.push(path);
  }

}