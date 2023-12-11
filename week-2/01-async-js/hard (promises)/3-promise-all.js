/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond(t) {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), t * 1000);
  });
}

function waitTwoSecond(t) {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), t * 1000);
  });
}

function waitThreeSecond(t) {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const start = Date.now();
  const result = await Promise.all([
    waitOneSecond(t1),
    waitTwoSecond(t2),
    waitThreeSecond(t3),
  ]);
  const end = Date.now();
  return end - start;
}
module.exports = calculateTime;
