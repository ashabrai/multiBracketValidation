'use strict';

class BracketStack {
  constructor() {
    this.bracketStorage = [];
    this.count = 0;
  }

  push(value) {
    this.bracketStorage.push(value);
    this.count += 1;
  }

  pop() {
    this.bracketStorage.pop();
    this.count -= 1;
  }

  peek() {
    let lastBracket;
    if (this.bracketStorage.length !== 0) {
      for (let i = 0; i < this.bracketStorage.length; i++) {
        lastBracket = i;
      }
      return this.bracketStorage[lastBracket];
    }
    return undefined;
  }
}
module.exports = function bracketValidation(string) {
  const correctStack = new BracketStack();
  if (typeof string !== 'string') {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      correctStack.push(string[i]);
    }
    if (string[i] === '}') {
      if (correctStack.peek() === '{') {
        correctStack.pop();
      }
    }
    if (string[i] === ')') {
      if (correctStack.peek() === '(') {
        correctStack.pop();
      }
    }
    if (string[i] === ']') {
      if (correctStack.peek() === '[') {
        correctStack.pop();
      }
    }
  }
  return correctStack.size === 0;
};
