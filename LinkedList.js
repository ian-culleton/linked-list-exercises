class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToTail(valueToAdd) {
    // TODO: Implement this.
  }

  addToHead(valueToAdd) {
    // TODO: Implement this.
  }

  removeFromTail() {
    // TODO: Implement this.
  }

  removeFromHead() {
    // TODO: Implement this.
  }

  insertAt(index, value) {
    // TODO: Implement this.
  }

  removeAt(index) {
    // TODO: Implement this.
  }
}

module.exports = {
  LinkedList,
  LinkedListNode
}