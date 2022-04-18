const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const storage = {}
  let answer = []
  for(let el of names){
    if(storage.hasOwnProperty(el)){
      answer.push(el + `(${storage[el]})`)
      storage[el + `(${storage[el]})`] = 1;
      storage[el] += 1
    }else{
      storage[el] = 1
      answer.push(el)
    }
  }
  return answer
}

module.exports = {
  renameFiles
};
