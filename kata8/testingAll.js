test = (n) => {
  let index = 0;
  n.forEach((val) => {
    if (val === true) {
      index++;
    }
  });
  return index;
};
