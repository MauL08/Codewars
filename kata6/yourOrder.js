order = (words) => {
  let splitWord = words.split(" ");
  let temp = {};

  splitWord.forEach((val, index) => {
    let sortWord = val.split("").sort();
    let count = sortWord[0];
    temp[count] = val;
  });

  let out = Object.values(temp).map((val) => {
    return val;
  });

  return out.join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));
