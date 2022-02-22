highAndLow = (numbers) => {
  let splitNumber = numbers.split(" ");
  let intNum = [];

  splitNumber.forEach((val, index) => {
    intNum[index] = Number(val);
  });

  let max = Math.max.apply(0, intNum);
  let min = Math.min.apply(0, intNum);

  return `${max} ${min}`;
};

console.log(highAndLow("1 2 3 4 5"));
