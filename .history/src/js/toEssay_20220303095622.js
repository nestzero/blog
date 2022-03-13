export default function toEssay(item){
  const essayStorage=JSON.stringify(item)
  window.sessionStorage.setItem('essay',essayStorage);

  console.log(this.$route.path);

  let {href}=this.$router.resolve('/content');
  window.open(href,'_blank');
}