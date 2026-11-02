const { NotImplementedError } = require('../lib');

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
  // Перетворюємо вхідні параметри на рядки (на випадок, якщо це булеві значення, числа тощо)
  const string = String(str);
  const addition = options.addition !== undefined ? String(options.addition) : '';

  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;

  const separator = options.separator !== undefined ? options.separator : '+';
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  // Створюємо частину з addition
  const additionArr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArr.push(addition);
  }
  const combinedAddition = additionArr.join(additionSeparator);

  // Об'єднуємо головний рядок та addition
  const baseBlock = string + combinedAddition;

  // Повторюємо весь блок потрібну кількість разів
  const resultArr = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(baseBlock);
  }

  return resultArr.join(separator);
}

module.exports = {
  repeater
};
