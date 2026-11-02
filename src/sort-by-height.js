const { NotImplementedError } = require('../lib');

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
  // Фільтруємо всі елементи, окрім -1, і сортуємо їх за зростанням
  const sortedHeights = arr.filter(num => num !== -1).sort((a, b) => a - b);

  let index = 0;
  // Проходимо по оригінальному масиву: якщо -1, залишаємо на місці, інакше підставляємо відсортоване значення
  return arr.map(num => (num === -1 ? -1 : sortedHeights[index++]));
}

module.exports = {
  sortByHeight
};
