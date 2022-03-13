export default function ellipsisSentence(value) {
  if (!value) return "";

  if (value.length > 50) {
    return value.slice(0, 50) + "...";
  }

  return value;
}