const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let arrS1 = [ ...s1]
  let arrS2 = [ ...s2]
  for(let el of arrS1){
    if(arrS2.includes(el)){
      counter++;
      const index = arrS2.indexOf(el)
      arrS2 = arrS2.slice(0,index).concat(arrS2.slice(index+1,arrS2.length))
    }
  }
  return counter

}

module.exports = {
  getCommonCharacterCount
};
