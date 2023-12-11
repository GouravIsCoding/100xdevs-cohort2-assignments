/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  await waitOneSecond(t1);
  await waitTwoSecond(t2);
  await waitThreeSecond(t3);
  const end = Date.now();
  return end - start;
}

module.exports = calculateTime;
