export default function toEssay(item) {
  const essayStorage = JSON.stringify(item)
  window.sessionStorage.setItem('essay', essayStorage);

  if (this.$route.path == '/home') {

    let { href } = this.$router.resolve('/content');
    window.open(href, '_blank');
  } else {
    this.isRouterAlive = false;
    this.$nextTick(function () {
      this.isRouterAlive = true;
    });
  }

}