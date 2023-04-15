const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.last = null;
  }

  getUnderlyingList() {
    console.log('this.top', this.top);
    return this.top;
  }

  enqueue(value) {
    let current = this.last;
    if(!current) {
      current = new ListNode(value);
      this.last = current;
      this.top = current;
    } else {
      current.next = new ListNode(value);
      this.last = current.next;
    }
  }

  dequeue() {
    let current = this.top;
    this.top = current.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
