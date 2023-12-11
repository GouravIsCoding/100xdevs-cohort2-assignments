/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  const startTime = Date.now();
  const endTime = startTime + milliseconds;
  console.log("thread blocked");
  while (Date.now() <= endTime) {}
}

console.log("sleep start");
sleep(4000);
console.log("sleep complete");
