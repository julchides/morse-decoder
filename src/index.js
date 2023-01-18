const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrMorse = [];
  let strResult = "";

  for (let i = 0; i < expr.length; i += 10) {
    arrMorse.push(
      expr
        .slice(i, i + 10)
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "")
    );
  }

  for (let j = 0; j < arrMorse.length; j++) {
    arrMorse[j] !== "**********"
      ? (strResult = strResult + MORSE_TABLE[arrMorse[j]])
      : (strResult = strResult + " ");
  }

  return strResult;
}

module.exports = {
  decode,
};
