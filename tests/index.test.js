import * as Index from '../index.js';

expect.extend({
  toBeInRange(received, a, b) {
    return received >= a && received <= b
      ? {
          message: () => `expected ${received} to be in range`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be in range`,
          pass: false,
        };
  },
});

const testArray = [-1, 0, -514, 1, 2, 3, 4, 5];
const testArray2 = [5454, -9, -5664, 'fh', '', [], [[]], { '': '' }];

describe('URandom', () => {
  test('Test URandom.int()', () => {
    const min = 0;
    const max = 10;
    const n = Index.URandom.int(min, max);
    expect(n).toBeInRange(min, max);
    expect(typeof n).toBe('number');
  });

  test('Test URandom.float()', () => {
    const min = 0;
    const max = 10;
    const n = Index.URandom.float(min, max);
    expect(n).toBeInRange(min, max);
    expect(Number(n) === n && n % 1 !== 0).toBeTruthy();
  });

  test('Test URandom.bool()', () => {
    expect(typeof Index.URandom.bool()).toBe('boolean');
  });

  test('Test URandom.choose()', () => {
    expect(testArray.includes(Index.URandom.choose(testArray))).toBeTruthy();
  });
});

describe('UMath', () => {
  test('Test UMath.pi()', () => {
    expect(Index.UMath.pi(500)).toBe(
      '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912',
    );
  });
});

describe('UTime', () => {
  test('Test UTime.sleep()', async () => {
    const ms = 100;
    const beforeTime = new Date().getTime();
    await Index.UTime.sleep(ms);
    const newTime = new Date().getTime();
    expect(newTime).toBeGreaterThanOrEqual(beforeTime + ms);
    expect(newTime).toBeLessThan(beforeTime + ms + 10);
  });
});

describe('UArray', () => {
  test('Test UArray.count.odd()', () => {
    const f = Index.UArray.count.odd;
    expect(f(testArray)).toBe(4);
  });

  test('Test UArray.count.even()', () => {
    const f = Index.UArray.count.even;
    expect(f(testArray)).toBe(3);
  });

  test('Test UArray.count.positive()', () => {
    const f = Index.UArray.count.positive;
    expect(f(testArray)).toBe(5);
  });

  test('Test UArray.count.negative()', () => {
    const f = Index.UArray.count.negative;
    expect(f(testArray)).toBe(2);
  });

  test('Test UArray.includes.odd()', () => {
    const f = Index.UArray.includes.odd;
    expect(f(testArray)).toBeTruthy();
  });

  test('Test UArray.includes.even()', () => {
    const f = Index.UArray.includes.even;
    expect(f(testArray)).toBeTruthy();
  });

  test('Test UArray.includes.positive()', () => {
    const f = Index.UArray.includes.positive;
    expect(f(testArray)).toBeTruthy();
  });

  test('Test UArray.includes.negative()', () => {
    const f = Index.UArray.includes.negative;
    expect(f(testArray)).toBeTruthy();
  });
});
describe('UConvert', () => {
  test('Test UConvert.rgbToHex()', () => {
    const f = Index.UConvert.rgbToHex;
    expect(f(0, 51, 255)).toBe('#0033ff');
  });

  test('Test UConvert.celsiusToFahrenheit()', () => {
    const f = Index.UConvert.celsiusToFahrenheit;
    expect(f(15)).toBe(59);
    expect(f(0)).toBe(32);
    expect(f(-20)).toBe(-4);
  });

  test('Test UConvert.fahrenheitToCelsius()', () => {
    const f = Index.UConvert.fahrenheitToCelsius;
    expect(f(59)).toBe(15);
    expect(f(32)).toBe(0);
    expect(f(-4)).toBe(-20);
  });
});
