export default function toAuthor(path,author) {
  

  const authorStorage = JSON.stringify(author)
  window.sessionStorage.setItem('author', authorStorage);

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