export default function ellipsisRemark(value) {
  if (!value) return "";

  if (value.length > 15) {
    return value.slice(0, 15) + "...";
  }

  return value;
}