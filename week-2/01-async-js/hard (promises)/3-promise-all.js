/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  const result = await Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]);
  const end = Date.now();
  console.log(`${end - start} milliseconds taken to resolve all promises`);
}

calculateTime();
