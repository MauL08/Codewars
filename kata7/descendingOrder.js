descendingOrder = (number) => {
  let strNumber = String(number).split("").sort().reverse();
  let out = "";

  strNumber.forEach((val) => {
    out += val;
  });

  return Number(out);
};

console.log(descendingOrder(42145));
