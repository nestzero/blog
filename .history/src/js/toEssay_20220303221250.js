export default function toEssay(path,id) {
  const essayStorage = JSON.stringify(id)
  window.sessionStorage.setItem('essay', essayStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/essay');
    window.open(href, '_blank');
  }else if(this.$route.path == path){
    window.location.reload();
  }else{
    this.$router.push(path);
  }

}