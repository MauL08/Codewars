findOdd = (num) => {
  let numObj = {};
  let theHint;

  num.forEach((val) => {
    if (!numObj[val]) {
      numObj[val] = 1;
    } else {
      numObj[val] += 1;
    }
  });

  Object.values(numObj).forEach((val) => {
    if (val % 2 === 1) {
      theHint = val;
    }
  });

  let theKey = Object.keys(numObj).find((val) => numObj[val] === theHint);

  return Number(theKey);
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
