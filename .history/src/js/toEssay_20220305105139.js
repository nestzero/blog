export default function toEssay(id) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve(
      {
        path: '/essay',
        query: { id: id }
      });
    window.open(href, '_blank');
  } else{

    this.$router.push({
      path: '/essay',
      query: { id: id }
    });

  }

}