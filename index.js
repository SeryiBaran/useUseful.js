import { PISTR } from "./utils/pi.js";

export const URandom = {
  int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  float: (min, max) => Math.random() * (max - min + 1) + min,
  bool: () => Math.random() < 0.5,
  choose: arr => arr[Math.floor(Math.random() * arr.length)],
  arrOfNumbers(len, min, max) {
    let result = [];
    for (let i = 0; i < len; i++) {
      let temp = this.int(min, max);
      if (result.indexOf(temp) === -1) {
        result.push(temp);
      } else {
        i--;
      }
    }
    return result;
  },
};

export const UMath = {
  pi: len => {
    if (len > PISTR.length || len <= 0) {
      throw new Error()'UUJS: Error: Invalid argument "length" of method UMath.pi!');
      return;
    }
    return `3.${PISTR.slice(0, len)}`;
  },
};

export const UTime = {
  sleep: ms => new Promise(r => setTimeout(r, ms)),
};
