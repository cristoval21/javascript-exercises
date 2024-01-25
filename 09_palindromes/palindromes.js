const palindromes = function (str) {
  str = str.replaceAll(/[^a-z0-9]/gi, "");
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str.toLowerCase() === reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
