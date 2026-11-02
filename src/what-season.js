const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // Перевіряємо, чи переданий аргумент є об'єктом Date, і чи не перекинули нам фейковий Date
  // (тести можуть передавати кастомні об'єкти, які маскуються під Date, тому перевіряємо через try/catch або toString)
  try {
    if (
      !(date instanceof Date) ||
      isNaN(date.getTime()) ||
      Object.prototype.toString.call(date) !== '[object Date]' ||
      // Перевірка на спроби передати щось на кшталт об'єкта без власних методів або зламаного прототипу
      typeof date.getMonth !== 'function'
    ) {
      throw new Error('Invalid date!');
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }

  // Додаткова перевірка на наявність прихованих полів або фальшивих конструкторів у деяких складних тестах
  try {
    date.toISOString();
  } catch (e) {
    // Якщо це підроблений об'єкт, який не має методів справжнього Date (наприклад, перекинули простий об'єкт чи масив)
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  }
  if (month >= 2 && month <= 4) {
    return 'spring';
  }
  if (month >= 5 && month <= 7) {
    return 'summer';
  }
  if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
