import * as Index from "../index.js";

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

test("Test URandom.int()", () => {
  const min = 0;
  const max = 10;
  const n = Index.URandom.int(min, max);
  expect(n).toBeInRange(min, max);
  expect(typeof n).toBe("number");
});

test("Test URandom.float()", () => {
  const min = 0;
  const max = 10;
  const n = Index.URandom.float(min, max);
  expect(n).toBeInRange(min, max);
  expect(Number(n) === n && n % 1 !== 0).toBeTruthy();
});

test("Test URandom.bool()", () => {
  const n = Index.URandom.bool();
  expect(typeof n).toBe("boolean");
});

test("Test URandom.choose()", () => {
  const array = [1, 2, 3];
  const n = Index.URandom.choose(array);
  expect(array.indexOf(n) !== -1).toBeTruthy();
});

test("Test URandom.arrOfNumbers()", () => {
  const len = 10;
  const min = 0;
  const max = 10;
  const n = Index.URandom.arrOfNumbers(len, min, max);
  expect(
    n.length === len &&
      n.filter((e) => typeof e === "number" && e >= min && e <= max).length ===
        len
  ).toBeTruthy();
});

test("Test UMath.pi()", () => {
  const len = 500;
  const n = Index.UMath.pi(len);
  expect(n).toBe(
    "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912"
  );
});

test("Test UTime.sleep()", async () => {
  const ms = 100;
  const beforeTime = new Date().getMilliseconds();
  const n = await Index.UTime.sleep(ms);
  const newTime = new Date().getMilliseconds();
  expect(newTime).toBeGreaterThanOrEqual(beforeTime + ms);
  expect(newTime).toBeLessThan(beforeTime + ms + 10);
});
