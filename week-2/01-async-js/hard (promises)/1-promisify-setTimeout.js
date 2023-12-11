/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  console.log(`wait ${n} seconds for the promise to resolve`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved promise"), n * 1000);
  });
}

console.log(wait(3).then((data) => console.log(data)));
