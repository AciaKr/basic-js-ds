const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = [];
    this.length = 0;
  }

  push(element) {
    let head = this.head;
    head.push(element);
    this.length++
  }

  pop() {
    let head = this.head;
    let del = head.pop();
    this.length--
    return del;
  }

  peek() {
    let head = this.head;
    let peek = head[this.length-1];
    return peek
  }
}

module.exports = {
  Stack
};
