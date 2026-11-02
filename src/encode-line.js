const { NotImplementedError } = require('../lib');

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
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    // Якщо наступний символ такий самий, збільшуємо лічильник
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Додаємо лічильник (якщо більше 1) і символ до результату
      result += (count > 1 ? count : '') + str[i];
      count = 1; // скидаємо лічильник для нового символу
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
