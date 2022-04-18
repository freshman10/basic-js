const { NotImplementedError } = require('../extensions/index.js');

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
  flag = true;
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  constructor(mode){
    if(mode !== undefined){
      this.flag = mode;
    }
  }

  encrypt(stringToEncript, keyString) {
    if(stringToEncript === undefined || keyString === undefined){
      throw new Error("Incorrect arguments!")
    }

    let arrString = [...stringToEncript.toUpperCase()]
    let arrKey = [...keyString.toUpperCase()]
    let output = []
    let keyIndex = 0;

    for(let [i, el] of Object.entries(arrString)){
      if(!this.letters.includes(el)){
        output.push(el)
      }else{
        const num1 = this.letters.indexOf(el)
        const num2 = this.letters.indexOf(arrKey[(keyIndex)%arrKey.length])
        output.push(this.letters[(num1+num2)%26])
        keyIndex++;
      }
    }
    if(this.flag){
      return output.join("")
    }else{
      return output.reverse().join("")
    }
  }
  decrypt(stringToDecript, keyString) {
    if(stringToDecript === undefined || keyString === undefined){
      throw new Error("Incorrect arguments!")
    }

    let arrString = [...stringToDecript.toUpperCase()]
    let arrKey = [...keyString.toUpperCase()]
    let output = []
    let keyIndex = 0;

    for(let [i, el] of Object.entries(arrString)){
      if(!this.letters.includes(el)){
        output.push(el)
      }else{
        const num1 = this.letters.indexOf(el)
        const num2 = this.letters.indexOf(arrKey[(keyIndex)%arrKey.length])
        output.push(this.letters[(num1-num2<0?num1+26-num2:num1-num2)%26])
        keyIndex++;
      }
    }
    if(this.flag){
      return output.join("")
    }else{
      return output.reverse().join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
