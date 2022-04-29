const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
   // remove line with error and write your code here
  const catsArr = matrix.flat().filter(cat => cat === "^^");
  if (catsArr.length == 0) {
    return 0;
  } else {
    return catsArr.length;
  }
}

module.exports = {
  countCats
};
