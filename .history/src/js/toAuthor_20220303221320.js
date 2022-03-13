export default function toAuthor(path,id) {
  

  const authorStorage = JSON.stringify(id)
  window.sessionStorage.setItem('author_id', authorStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/author');
    window.open(href, '_blank');
  }else if(this.$route.path == path){
    window.location.reload();
  }else{
    console.log(path);
    this.$router.push(path);
  }

}