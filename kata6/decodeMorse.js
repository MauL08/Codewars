theMorse = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "/": " ",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
  "...---...": "SOS",
  "": " ",
};

const decodeMorse = (morseCode) => {
  let splitCode = morseCode.trim().split(" ");
  let theCode = [];

  splitCode.forEach((code, index) => {
    if (code === "") {
      splitCode.splice(index, 1);
    }
    theCode[index] = theMorse[code];
  });

  let join = theCode.join("");

  return join;
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
