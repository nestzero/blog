export default function countNums(value) {
  value = value.toString();

  if (!value) return "";

  if (value.length === 4) {
    let num1 = value.slice(0, 1);
    let num2 = value.slice(1, 2);

    return num1 + "." + num2 + "k";
  } else if (value.length === 5) {
    let num1 = value.slice(0, 1);
    let num2 = value.slice(1, 2);

    return num1 + "." + num2 + "w";
  } else if (value.length === 6) {
    let num1 = value.slice(0, 1);
    let num2 = value.slice(1, 2);

    return num1 + num2 + "w";
  } else {
    return value;
  }
}