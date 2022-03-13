export default function toEssay(item) {
  const essayStorage = JSON.stringify(item)
  window.sessionStorage.setItem('essay', essayStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/essay');
    window.open(href, '_blank');
  } else if(this.$route.path == '/essay') {
    window.onre
  }

}