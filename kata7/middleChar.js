getMiddle = (s) => {
  let splitS = s.split("");
  let lengthS = splitS.length;

  if (lengthS % 2 === 1) {
    let divC = Math.floor(lengthS / 2);
    return splitS[divC];
  } else {
    let divC = Math.floor(lengthS / 2);
    return `${splitS[divC - 1]}${splitS[divC]}`;
  }
};

console.log(getMiddle("test"));
