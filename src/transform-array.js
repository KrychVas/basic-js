const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const current = arr[i];

    if (current === '--double-next') {
      if (i + 1 < len) {
        result.push(arr[i + 1]);
      }
    } else if (current === '--double-prev') {
      if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
        result.push(result[result.length - 1]);
      }
    } else if (current === '--discard-next') {
      // Пропускаємо наступний елемент, переміщуючи індекс вперед
      i++;
    } else if (current === '--discard-prev') {
      if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

module.exports = {
  transform
};
