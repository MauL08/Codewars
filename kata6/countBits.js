countBits = (number) => {
  let bits = [];
  let index = 0;

  while (number > 0) {
    bits[index] = number % 2; // [1, ]
    number = Math.floor(number / 2);
    index++;
  }

  count = 0;
  bits.forEach((val) => {
    if (val === 1) {
      count++;
    }
  });

  return count;
};

console.log(countBits(17));
