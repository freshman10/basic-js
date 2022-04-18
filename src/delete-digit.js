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
  const arr = [...n.toString()]
  let max;
  for(let [i,el] of Object.entries(arr)){
    i = Number(i)
    let part = Number(arr.slice(0,i).concat(arr.slice(i+1,arr.length)).join(""))
    if(max === undefined || part > max){
      max = part;
      
    }
  }
  return max

}

module.exports = {
  deleteDigit
};
