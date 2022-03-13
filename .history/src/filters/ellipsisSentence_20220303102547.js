export default function ellipsisSentence(value) {
  if (!value) return "";

  if (value.length > 70) {
    return value.slice(0, 70) + "...";
  }

  return value;
}