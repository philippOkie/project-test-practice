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
