/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((res, rej) => {
    setTimeout(() => res("promise resolved"), 3000);
  });
}

async function calculateTime() {
  console.log("calculating Time");
  const start = Date.now();
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  const end = Date.now();
  console.log(`${end - start} milliseconds taken to resolve all promises`);
}
calculateTime();
