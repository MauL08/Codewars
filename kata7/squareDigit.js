squareDigits = (num) => {
  let dataTmp = String(num).split("");

  let res = "";
  dataTmp.forEach((val) => {
    let numTmp = Number(val);
    numTmp *= numTmp;

    let strNum = String(numTmp);
    res += strNum;
  });

  return Number(res);
};

console.log(squareDigits(3212));
