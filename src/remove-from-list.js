const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList() {
  let list = arguments[0];
  let number = arguments[1];

  function indexOf(element) {
    let current = list;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  function removeAt(position) {
    let current = list;
    if (position === 0) {
      list = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      if(current.next) {
        prev.next = current.next;
      } else {
        prev.next = null;
      }
    }
    return list;
  }

  while(indexOf(number) >= 0) {
    removeAt(indexOf(number));
  } return list
}

module.exports = {
  removeKFromList
};
