export function capitalize(str) {
  let firstChar = str.slice(0, 1);
  if (isCharLetter(firstChar)) {
    firstChar = firstChar.toUpperCase();
    let newStr = str.substring(1);
    return firstChar + newStr;
  } else {
    return "invalid input";
  }
}

function isCharLetter(firstChar) {
  return firstChar.toLowerCase() !== firstChar.toUpperCase();
}

export function reverse(x) {
  let str = x.toString();
  let xStringReversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    xStringReversed += str.substring(i, i + 1);
    i--;
  }
  return xStringReversed;
}

export default class Calculator {
  add(a, b) {
    let result = a + b;
    return result;
  }

  subtract(a, b) {
    let result = a - b;
    return result;
  }

  multiply(a, b) {
    let result = a * b;
    return result;
  }

  divide(a, b) {
    let result = a / b;
    return result;
  }
}
