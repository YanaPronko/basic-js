const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], 

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof (value)  === "undefined") {
      this.chain.push('(  )');
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
      
  },
  removeLink(position) {
    if ((typeof position !== "number") || (position % 1 !== 0)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
      
    } else if ((typeof (this.chain[position - 1])) === "undefined") {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
      
    } else {
      this.chain.splice((position - 1), 1);
      return this;
   }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain;
    
    this.chain = [];
    return finishChain.join("~~");
  }
};

module.exports = {
  chainMaker
};
