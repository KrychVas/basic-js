const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  _validate(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  }

  encrypt(message, key) {
    this._validate(message, key);

    const upperMsg = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMsg.length; i++) {
      const char = upperMsg[i];

      // Перевіряємо, чи є символ літерою англійського алфавіту (A-Z)
      if (char >= 'A' && char <= 'Z') {
        const msgCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;

        // Формула шифрування Віженера: (M + K) % 26
        const encryptedCode = (msgCode + keyCode) % 26;
        result += String.fromCharCode(encryptedCode + 65);

        keyIndex++;
      } else {
        // Якщо це не літера (пробіл, знак пунктуації тощо), залишаємо без змін
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this._validate(encryptedMessage, key);

    const upperMsg = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMsg.length; i++) {
      const char = upperMsg[i];

      // Перевіряємо, чи є символ літерою англійського алфавіту (A-Z)
      if (char >= 'A' && char <= 'Z') {
        const msgCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;

        // Формула дешифрування Віженера: (M - K + 26) % 26
        const decryptedCode = (msgCode - keyCode + 26) % 26;
        result += String.fromCharCode(decryptedCode + 65);

        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
