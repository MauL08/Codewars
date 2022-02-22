duplicateCount = (text) => {
  let splitText = text.toLowerCase().split("");
  let tmp = {};
  let count = 0;

  splitText.forEach((val) => {
    if (!tmp[val]) {
      tmp[val] = 1;
    } else {
      tmp[val] += 1;
    }
  });

  Object.values(tmp).forEach((val) => {
    if (val > 1) {
      count++;
    }
  });

  return count;
};

console.log(duplicateCount("indivisibility"));
