# useUseful.js - ESM module with useful JavaScript functions!
[![NPM](https://nodei.co/npm/@seryibaran/useuseful.png?mini=true)](https://npmjs.org/package/@seryibaran/useuseful)

<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@seryibaran/useuseful" alt="NPM version" /></a></span>

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
  - `choose` - generates random element from array.
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

## Example of using

Import module:
```js
import { UMath } from "@seryibaran/useuseful";
```

Run function:
```js
console.log(UMath.pi(5)); // Prints "3.14159"
```
