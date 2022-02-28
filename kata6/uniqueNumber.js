findUniq = (arr) => {
  let arrObj = {};

  arr.forEach((val) => {
    if (!arrObj[val]) {
      arrObj[val] = 1;
    } else {
      arrObj[val] += 1;
    }
  });

  let res = Object.keys(arrObj).find((data) => arrObj[data] === 1);

  return Number(res);
};

console.log(findUniq([0, 0, 0.55, 0, 0]));
