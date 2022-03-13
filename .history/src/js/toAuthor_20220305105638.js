export default function toAuthor(id) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve({
      path:'/author',
      query:{
        id:id
      }
    });
    window.open(href, '_blank');
  }else{
    this.$router.push({path:'/author',
    query:{
      id:id
    }});

  }

}