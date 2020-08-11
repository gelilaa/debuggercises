# Debuggercises 

> 8/11/2020, 12:04:03 PM 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/1-literals 

- [/1-coercion-and-comparing.js](#1-coercion-and-comparingjs) - _pass_ 
- [/2-arithmetic.js](#2-arithmeticjs) - _pass_ 
- [/3-logical-operators.js](#3-logical-operatorsjs) - _pass_ 
- [/4-all-together.js](#4-all-togetherjs) - _pass_ 
---

## /1-coercion-and-comparing.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/1-coercion-and-comparing.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = 'number' === typeof Infinity;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = 'number'=== typeof NaN;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = true;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/2-arithmetic.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = NaN;

// the original expression
const step0 = -(null + '10') * 15;
console.assert(Object.is(step0, expected), 'Step 0');

/*

*/
const step1 = NaN;
console.assert(Object.is(step1, expected), 'Step 1');

/*

*/
const step2 = (null + 'adsf')- 0;
console.assert(Object.is(step2, expected), 'Step 2');

/*

*/
const step3 = -2345 - 'yes';
console.assert(Object.is(step3, expected), 'Step 3');

```

[TOP](#debuggercises)

---

## /3-logical-operators.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/3-logical-operators.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = !undefined && !'';
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = true && !false;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = typeof 'boolean' && true;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = !false && !false;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /4-all-together.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/4-all-together.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = false;

// the original expression
const step0 = 12 % '3' || !!NaN;
console.assert(step0 === expected, 'Step 0');

// how may steps are there?

```

[TOP](#debuggercises)

