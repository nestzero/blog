export function backTopBtn() {
  let btn = this.$refs.btn;

  let scrollTop =
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    window.scrollY;

  if (scrollTop > 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

export function backTop() {
  let timeSwitch;

  clearInterval(timeSwitch);
  // 设置定时器
  timeSwitch = setInterval(function () {
    document.documentElement.scrollTop -= 100;

    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timeSwitch);
    }
  }, 20);
}