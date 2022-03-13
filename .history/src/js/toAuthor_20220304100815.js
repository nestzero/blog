export default function toAuthor(path,id) {

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve({
      path:'/author',
      query:{
        authorid:id
      }
    });
    window.open(href, '_blank');
  }else if(this.$route.path == path){
    window.location.reload();
  }else{
    this.$router.push({path:'/author',
    query:{
      authorid:id
    }});
  }

}