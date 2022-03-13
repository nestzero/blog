export default function ellipsisSentence(value) {
  if (!value) return "";

  if (value.length > 60) {
    return value.slice(0, 60) + "...";
  }

  return value;
}