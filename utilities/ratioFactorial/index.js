const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

let obj = {};
const ratioAndFactorial = (n1, n2, n3) => {
  const r = ratio(n1, n2);
  const f = factorial(n3);
  obj["ratio"] = r;
  obj["factorial"] = f;
  return obj;
};

console.log(ratioAndFactorial(2, 3, 4));

module.exports = ratioAndFactorial;
