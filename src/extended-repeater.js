const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (str===null){
    str="null";
  }
  if(options.addition === null){
    options.addition = "null"
  }
  str = new String(str);
  
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  options.addition = new String(options.addition)
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }



  const arr_separators = Array.from(
    Array(options.additionRepeatTimes).keys()
  ).fill(options.addition, 0, options.additionRepeatTimes);

  const str_separators = arr_separators.join(options.additionSeparator);
  return Array.from(Array(options.repeatTimes).keys())
    .fill(str + str_separators, 0, options.repeatTimes)
    .join(options.separator);
}

module.exports = {
  repeater
};
