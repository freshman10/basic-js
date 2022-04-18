const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    console.debug(position)
    if(position > 0 && position < this.chain.length+1 && Number.isInteger(position)){
      position--;
      this.chain = this.chain.slice(0, position).concat(this.chain.slice(position+1,this.chain.length))
      return this
    }
    this.chain=[]
    throw new Error('You can\'t remove incorrect link!')
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    
    let answer = [];
    for(let x of this.chain){
      answer.push(`( ${x} )`)
    }
    this.chain=[]
    return answer.join("~~")
  }
};

module.exports = {
  chainMaker
};
