const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = (n + "").split("").map(Number);
  let result = Math.max(...numbers.map((el, i) => {
   let copyArr = numbers.slice();

    copyArr.splice(i, 1);
    return Number(copyArr.join(''));
  }
  ));
  return result;
}

module.exports = {
  deleteDigit
};
