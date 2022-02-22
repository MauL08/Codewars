solution = (number) => {
  numData = [];
  if (number > 0) {
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        numData[i] = i;
      } else if (i % 3 === 0 && i % 5 === 0) {
        numData[i] = i;
      } else {
        continue;
      }
    }
  } else {
    return 0;
  }

  res = 0;
  numData.forEach((val) => {
    res += val;
  });

  return res;
};

console.log(solution(10));
