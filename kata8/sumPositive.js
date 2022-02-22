positiveSum = (arr) => {
  let out = 0;
  arr.forEach((val) => {
    if (val < 0) {
      val = 0;
    }
    out += val;
  });
  return out;
};

console.log(positiveSum([1, 2, 3, 4, 5]));
