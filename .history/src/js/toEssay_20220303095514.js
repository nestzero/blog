export default function toEssay(item){
  const essayStorage=JSON.stringify(item)
  window.sessionStorage.setItem('essay',essayStorage);

  
  let {href}=this.$router.resolve('/content');
  window.open(href,'_blank');
}