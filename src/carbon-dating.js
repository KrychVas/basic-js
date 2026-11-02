const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Перевірка, чи вхідний параметр є рядком
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  // Перетворення рядка на число
  const activity = parseFloat(sampleActivity);

  // Перевірка на валідність числа: чи це число, чи воно більше за 0 і менше або дорівнює MODERN_ACTIVITY
  if (
    isNaN(activity) ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Розрахунок віку за формулою радіовуглецевого датування
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);

  return age;
}

module.exports = {
  dateSample
};
