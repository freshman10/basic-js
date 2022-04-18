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
  let sum = 0
  for(let [i,raw] of Object.entries(matrix)){
    for(let [y,el] of Object.entries(raw)){
      i = Number(i)
      if(i === 0 || matrix[i-1][y] !== 0){
        sum += el
      }
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
