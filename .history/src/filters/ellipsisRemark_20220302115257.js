export default ellipsisRemark(value) {
  if (!value) return "";

  if (value.length > 11) {
    return value.slice(0, 11) + "...";
  }

  return value;
}