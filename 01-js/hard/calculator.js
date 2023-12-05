/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
"use strict";

class Calculator {
  constructor() {
    this.result = 0;
    this.op = new Map([
      ["+", this.add.bind(this)],
      ["-", this.subtract.bind(this)],
      ["*", this.multiply.bind(this)],
      ["/", this.divide.bind(this)],
    ]);
    this.precedence = new Map([
      ["+", 1],
      ["-", 1],
      ["*", 2],
      ["/", 2],
    ]);
    this.stack = [];
  }
  add(n) {
    this.result += n;
  }
  subtract(n) {
    this.result -= n;
  }
  multiply(n) {
    this.result *= n;
  }
  divide(n) {
    if (n === 0) throw new Error("cannot divide by zero");
    this.result /= n;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expr) {
    let exprWithoutSpace = expr.replace(/\s+/g, "");
    try {
      if (!/^[0-9\s+\-*/().]+$/.test(exprWithoutSpace)) {
        throw new Error("invalid expression");
      }
      let result = eval(exprWithoutSpace);
      if (isNaN(result) || !isFinite(result))
        throw new Error("invalid expression");
      return (this.result = result);
    } catch (err) {
      throw err;
    }
  }
}
const calculator = new Calculator();
console.log(calculator.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`));

module.exports = Calculator;
