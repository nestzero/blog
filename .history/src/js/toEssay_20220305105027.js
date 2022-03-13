export default function toEssay(path, id) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve(
      {
        path: '/essay',
        query: { id: id }
      });
    window.open(href, '_blank');
  } else{
    log

    this.$router.push({
      path: '/essay',
      query: { id: id }
    });

  }

}