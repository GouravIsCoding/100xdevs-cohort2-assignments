// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function mySetTimeout(i, count) {
  setTimeout(() => {
    console.log(i);
    if (i < count) mySetTimeout(i + 1, count);
  }, 1000);
}

function counter(count = Number.MAX_VALUE) {
  mySetTimeout(1, count);
}
counter(10);

// (Hint: setTimeout)
