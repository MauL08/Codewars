spinWords = (str) => {
  let splitWord = str.split(" ");

  if (splitWord.length === 1) {
    let theWord = splitWord[0].split("");
    let wordTmp = "";

    if (theWord.length >= 5) {
      reversedWord = theWord.reverse();

      reversedWord.forEach((val) => {
        wordTmp += val;
      });

      return wordTmp;
    } else {
      return str;
    }
  } else if (splitWord.length > 1) {
    let tmp = [];
    let index = 0;

    for (let i = 0; i < splitWord.length; i++) {
      let moreWordTmp = "";
      let theWord = splitWord[i].split("");

      if (theWord.length >= 5) {
        reversedWord = theWord.reverse();

        reversedWord.forEach((val) => {
          moreWordTmp += val;
        });

        tmp[index] = moreWordTmp;
        index++;
      } else {
        tmp[index] = splitWord[i];
        index++;
      }
    }
    moreWordTmp = tmp.join(" ");
    return moreWordTmp;
  }
};

console.log(spinWords("Hey fellow warriors"));
