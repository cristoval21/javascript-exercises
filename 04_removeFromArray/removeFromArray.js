const removeFromArray = function(array, ...values) {
  let newArray = [];

  for (let element of array) {
    let include = true;

    for (let value of values) {
      if (element === value) include = false;
    }

    if (include) newArray.push(element);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
