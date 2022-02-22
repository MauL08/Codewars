removeChar = (str) => {
  let splitStr = str.split("");
  let len = splitStr.length - 1;
  splitStr[0] = "";
  splitStr[len] = "";
  return splitStr.join("");
};

console.log(removeChar("akbar"));
