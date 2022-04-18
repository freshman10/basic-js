const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  const storage = {}
  for(let addr of domains){
    let arr = addr.split(".").reverse()
    for(let [i,el] of Object.entries(arr)){
      i = Number(i)
      el= `${i!==0?".":""}` + arr.slice(0,i).join(".") + "." + el
      if(storage.hasOwnProperty(el)){
        storage[el]+=1
      }else{
        storage[el] = 1;
      }
    }
  }
  return storage
}

module.exports = {
  getDNSStats
};
