const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (matrix[r][c] === 0) {
        break; // Зупиняємо додавання елементів у цьому стовпчику, якщо зустріли 0
      }
      sum += matrix[r][c];
    }
  }

  return sum;
}
module.exports = {
  getMatrixElementsSum
};
