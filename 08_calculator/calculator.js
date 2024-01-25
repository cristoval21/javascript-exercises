const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return +(nums.reduce((total, num) => total + num, 0));
};

const multiply = function(nums) {
  return +(nums.reduce((total, num) => total * num));
};

const power = function(a, b) {
  let total = 1;
	for (let i = 0; i < b; i++) {
    total *= a;
  }

  return total;
};

const factorial = function(num) {
  let total = 1;
	if (num == 0) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
  }

  return total;
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
