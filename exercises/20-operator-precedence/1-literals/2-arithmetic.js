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
