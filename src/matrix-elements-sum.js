const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let values = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 && (i === 0 || matrix[i - 1][j] !== 0)) {
      values.push(matrix[i][j]);
      }
    }
  }
  return values.reduce((acc, item) => acc + item, 0);
}

module.exports = {
  getMatrixElementsSum
};

/* let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]; */
// let indexes = [];
// for (let i = 0; i < matrix.length; i++) {
  // for (let j = 0; j < matrix[i].length; j++) {
 /*    if (matrix[i][j] == 0) {
      indexes.push(matrix[i+1][j]);
    } */
    
  // }
// }
// const indexesMap = indexes.map(item => item = ((item[0] + (+item[1] + 1) + item.slice(2))));

