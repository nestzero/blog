export default function formatTime(valueTime){
  if (valueTime) {
    let newData = Date.parse(new Date());
    let diffTime = Math.abs(newData - valueTime);

    if (diffTime > 7 * 24 * 3600 * 1000) {
      let date = new Date(valueTime);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;

      m = m < 10 ? "0" + m : m;

      let d = date.getDate();
      d = d < 10 ? "0" + d : d;

      return m + "-" + d;
    } else if (
      diffTime < 7 * 24 * 3600 * 1000 &&
      diffTime > 24 * 3600 * 1000
    ) {
      //注释("一周之内");
      // let time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));

      return dayNum + "天前";
    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      //注释("一天之内");
      // let time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 60 * 1000));

      return dayNum + "小时前";
    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
      // 注释("一小时之内");
      // let time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 1000));

      return dayNum + "分钟前";
    }
  }
}