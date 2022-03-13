export default function toAuthor(author) {
  const authorStorage = JSON.stringify(author)
  window.sessionStorage.setItem('essay', authorStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/content');
    window.open(href, '_blank');
  } else {
    window.location.reload();
  }

}