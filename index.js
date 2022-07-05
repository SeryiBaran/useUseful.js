import { PISTR } from './utils/pi.js';

export const URandom = {
  int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  float: (min, max) => Math.random() * (max - min) + min,
  bool: () => Math.random() < 0.5,
  choose: arr => arr[Math.floor(Math.random() * arr.length)],
};

export const UMath = {
  pi: len => {
    if (len > PISTR.length || len <= 0) {
      throw new Error(
        'UUJS: Error: Invalid argument "length" of method UMath.pi!',
      );
    } else {
      return `3.${PISTR.slice(0, len)}`;
    }
  },
};

export const UTime = {
  sleep: ms => new Promise(r => setTimeout(r, ms)),
};

export const UArray = {
  count: {
    odd: arr => arr.filter(elem => elem % 2 === 0).length,
    even: arr => arr.filter(elem => elem % 2 === 1).length,
    positive: arr => arr.filter(elem => elem > 0).length,
    negative: arr => arr.filter(elem => elem < 0).length,
  },
  includes: {
    odd: arr => UArray.count.odd(arr) > 0,
    even: arr => UArray.count.even(arr) > 0,
    positive: arr => UArray.count.positive(arr) > 0,
    negative: arr => UArray.count.negative(arr) > 0,
  },
};

export const UConvert = {
  rgbToHex: (r, g, b) =>
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
  celsiusToFahrenheit: c => (c * 9) / 5 + 32,
  fahrenheitToCelsius: f => ((f - 32) * 5) / 9,
};
