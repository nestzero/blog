export default function ellipsisRemark(value) {
  if (!value) return "";

  if (value.length > 20) {
    return value.slice(0, 20) + "...";
  }

  return value;
}