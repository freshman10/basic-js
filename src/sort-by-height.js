const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filteredArr = arr.filter(el => el !== -1).sort((a,b)=> a-b)
  let answer = []
  let i = 0
  for(let el of arr){
    if (el === -1){
      answer.push(el)
    }else{
      answer.push(filteredArr[i])
      i++;
    }
  }
  return answer
}

module.exports = {
  sortByHeight
};
