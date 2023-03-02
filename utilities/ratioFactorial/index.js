const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

let obj = {};
const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratioOfTwoNumbers(n1, n2);
  const factorial = factorialOfNumber(n3);
  obj["ratio"] = ratio;
  obj["factorial"] = factorial;
  return obj;
};

console.log(ratioAndFactorial(2, 3, 4));

module.exports = ratioAndFactorial;
