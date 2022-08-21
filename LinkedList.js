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
    this.insertAt(this.size, valueToAdd)
  }

  addToHead(valueToAdd) {
    this.insertAt(0, valueToAdd)
  }

  insertAt(index, value) {
    // do nothing if index is out of range
    if(index > this.size) return;
    if(index < 0) return;

    // if list is empty, create a new node and add the head.
    if(this.head === null) {
      this.head = new LinkedListNode(value);
      this.size++;
      return;
    }

    let currentNode = this.head, 
    oldNextNode = currentNode.nextNode,
    nodeToAdd = new LinkedListNode(value);

    // if inserting at first position, point this.head towards new node and new node towards old head.
    if(index === 0) {
      nodeToAdd.nextNode = this.head;
      this.head = nodeToAdd;
      this.size++;
      return;
    }

    // otherwise, iterate to node at desired index
    while(index > 1) {
      currentNode = currentNode.nextNode
      index--;
    }

    // link the current node to the next node and the next node to the previous next node.
    oldNextNode = currentNode.nextNode;
    currentNode.nextNode = nodeToAdd;
    currentNode.nextNode.nextNode = oldNextNode;

    //increase the size.
    this.size++;
  }

  removeAt(index) {
    if(index === 0) return this.removeFromHead();
    if(index > this.size) return;
    if(index < 0) return;
    let currentNode = this.head;
    while(index > 1) {
      currentNode = currentNode.nextNode
      index--;
    }
    currentNode.nextNode = currentNode.nextNode.nextNode;
    this.size--;
  }

  removeFromTail() {
    if(this.head === null) return this.head;
    if(this.size === 1) {
      const oldHead = this.head;
      this.head = null;
      return oldHead;
    }

    let currentNode = this.head;

    while(currentNode && currentNode.nextNode && currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    const nodeToReturn = currentNode.nextNode;
    currentNode.nextNode = null;
    this.size--;
    return nodeToReturn;
  }

  removeFromHead() {
    if(this.head === null) return this.head;
    const oldHead = this.head;
    this.head = this.head.nextNode;
    this.size--;
    return oldHead;
  }

}

module.exports = {
  LinkedList,
  LinkedListNode
}