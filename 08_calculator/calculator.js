const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce(((total, current) => total += current), 0);
};

const multiply = function(array) {
  return array.reduce(((total, current) => total *= current), );
};

const power = function(num, power) {
	return num**power;
};

const factorial = function(num) {
  let factoral = [];
  for (let i = 1; i <= num; i++) {
    factoral.push(i);
  };
  let result = factoral.reduce(((total, current) => total *= current), 1);
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
