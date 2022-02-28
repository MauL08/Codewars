addBinary = (a, b) => {
  let sumAB = a + b;
  let binary = [];
  let index = 0;

  while (sumAB > 0) {
    binary[index] = sumAB % 2;
    sumAB = Math.floor(sumAB / 2);
    index++;
  }

  return binary.reverse().join("");
};

console.log(addBinary(1, 1));
