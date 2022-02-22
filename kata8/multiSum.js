sumMul = (min, max) => {
  data = [];
  tmp = 0;

  if (min > 0 && max > 0) {
    for (let i = min; i < max; i++) {
      if (i % min === 0) {
        data[tmp] = i;
        tmp++;
      }
    }

    res = 0;
    data.forEach((val) => {
      res += val;
    });

    return res;
  } else {
    return "INVALID";
  }
};

console.log(sumMul(2, 9));
