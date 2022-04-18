const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0
  let arr = [... str]
  let prev;
  let answer = ""
  for(let el of arr){
    if(prev === undefined){
      prev = el
    }
    if(prev !== el){
      answer += `${counter!==1?counter.toString():""}` + prev
      prev = el
      counter = 1
    }else{
      counter++;
    }
  }
  answer += `${counter>1?counter.toString():""}` + `${prev!== undefined?prev:""}`
  return answer
}

module.exports = {
  encodeLine
};
