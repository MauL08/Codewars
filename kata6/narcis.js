narcissistic = (num) => {
  let splitNum = String(num).split("");
  let lenNum = splitNum.length;
  let count = 0;

  splitNum.forEach((val) => {
    count += Number(val) ** lenNum;
  });

  if (String(count) === String(num)) {
    return true;
  } else {
    return false;
  }
};

console.log(narcissistic(1652));
