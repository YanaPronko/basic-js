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
  let repeatAddition = "";
  let repeatStr = "";

  options.additionSeparator = options.additionSeparator || "|";
  options.separator = options.separator || "+";
  options.addition = options.addition || "";
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  repeatAddition += (("" + options.aaddition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + (options.addition);
  console.log(repeatAddition);
  repeatStr += ((("" + str + repeatAddition) + options.separator).repeat(options.repeatTimes - 1)) + (str + repeatAddition);
  return repeatStr;
}

module.exports = {
  repeater
};
