export default function toAuthor(item) {
  const essayStorage = JSON.stringify(item.)
  window.sessionStorage.setItem('essay', essayStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/content');
    window.open(href, '_blank');
  } else {
    window.location.reload();
  }

}