# useUseful.js - ESM module with useful JavaScript functions!
[![NPM](https://nodei.co/npm/@seryibaran/useuseful.png?mini=true)](https://npmjs.org/package/@seryibaran/useuseful)

<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@seryibaran/useuseful" alt="NPM version" /></a></span>
[![Tests CI](https://github.com/SeryiBaran/useUseful.js/actions/workflows/tests.yml/badge.svg)](https://github.com/SeryiBaran/useUseful.js/actions/workflows/tests.yml)

## Install
```console
npm i @seryibaran/useuseful
```

OR

```console
yarn add @seryibaran/useuseful
```

## List of functions
Template:

- `UXxx` - description of module
  - `xxx` - description of module.module
    - ...
      - `xxx` - description of function
        - `xxx` - description of argument

---

- `URandom` - random functions
  - `int` - generates random number in range.
    - `min` - minimum
    - `max` - maximum
  - `float` - generates random float number in range.
    - `min` - minimum
    - `max` - maximum
  - `bool` - generates random bool (`true`/`false`)
  - `choose` - returns random element from array.
    - `array` - array for choose
  - `arrOfNumbers` - generates array, filled with random numbers in range.
    - `len` - length of generated array
    - `min` - minimum
    - `max` - maximum
- `UMath` - math functions
  - `pi` - returns the number pi with the specified number of decimal places.
    - `len` - number of decimal places
- `UTime` - time functions
  - `sleep` - returns a promise that will be resolved after the specified time in milliseconds.
    - `time` - time of sleep in milliseconds
- `UArray` - array functions
  - `count` - functions for counting
    - `numbers` functions for counting numbers
        - `odd` - returns the number of odd numbers 
          - `array` - array for counting
        - `even` - returns the number of even numbers
          - `array` - array for counting
        - `positive` - returns the number of positive numbers
          - `array` - array for counting
        - `negative` - returns the number of negative numbers
          - `array` - array for counting
  - `includes` - functions for counting
    - `numbers` functions for counting numbers
        - `odd` - tests an array for includes of odd numbers
          - `array` - array for test
        - `even` - tests an array for includes of even numbers
          - `array` - array for test
        - `positive` - tests an array for includes of positive numbers
          - `array` - array for test
        - `negative` - tests an array for includes of negative numbers
          - `array` - array for test
- `UConvert` - functions for convert
  - `rgbToHex` - convert RGB to HEX
    - `r` - red
    - `g` - green
    - `b` - blue
  - `celsiusToFahrenheit` - convert celsius to fahrenheit
    - `celsius` - temperature in celsius
  - `fahrenheitToCelsius` - convert fahrenheit to celsius
    - `fahrenheit` - temperature in fahrenheit

## Example of using

Import module:
```js
import { UMath } from "@seryibaran/useuseful";
```

Run function:
```js
console.log(UMath.pi(5)); // Prints "3.14159"
```
