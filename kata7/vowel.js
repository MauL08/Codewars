getCount = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        count++;
        break;
      case "i":
        count++;
        break;
      case "u":
        count++;
        break;
      case "e":
        count++;
        break;
      case "o":
        count++;
        break;
    }
  }

  return count;
};
