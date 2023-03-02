const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

let obj = {};
const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratio(n1, n2);
  const factorial = factorial(n3);
  obj["ratio"] = ratio;
  obj["factorial"] = factorial;
  return obj;
};

console.log(ratioAndFactorial(2, 3, 4));

module.exports = ratioAndFactorial;
