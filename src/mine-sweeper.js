const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let answer = []
  for(let [i,raw] of Object.entries(matrix)){
    answer.push([])
    for(let [y,el] of Object.entries(raw)){
      let counter = 0
      i = Number(i)
      y = Number(y)
      if( i+1 < matrix.length && y+1 < raw.length && matrix[i+1][y+1]){
        counter++;
      }
      if( i-1 > -1 && matrix[i-1][y]){
        counter++;
      }
      if(i+1 < matrix.length && matrix[i+1][y]){
        counter++;
      }
      if( i-1 > -1 && y + 1 < raw.length && matrix[i-1][y+1]){
        counter++;
      }
      if( i-1 > -1 && y -1 > -1 && matrix[i-1][y-1]){
        counter++;
      }
      if(y-1 > -1 && matrix[i][y-1]){
        counter++;
      }
      if(y+1 < raw.length  && matrix[i][y+1]){
        counter++;
      }
      if(i+1 < matrix.length && y-1 > -1 && matrix[i+1][y-1]){
        counter++;
      }
      answer[i].push(counter)
    }
  }
  return answer
}

module.exports = {
  minesweeper
};
