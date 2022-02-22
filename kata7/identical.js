duplicateElements = (m, n) => {
  let tmp = false;

  if (m.length > 0 && n.length > 0) {
    m.forEach((val) => {
      for (let i = 0; i < n.length; i++) {
        if (val === n[i]) {
          tmp = true;
        }
      }
    });
  } else {
    return false;
  }

  return tmp;
};

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
