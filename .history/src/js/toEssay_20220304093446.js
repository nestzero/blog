export default function toEssay(path,item) {
  const essayStorage = JSON.stringify(id)
  window.sessionStorage.setItem('essay_id', essayStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve({path:'/essay',query:essay:item});
    window.open(href, '_blank');
  }else if(this.$route.path == path){
    window.location.reload();
  }else{
    this.$router.push(path);
  }

}