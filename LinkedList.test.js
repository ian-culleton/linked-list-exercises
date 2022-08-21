const expect = require('chai').expect;
const { LinkedList, LinkedListNode } = require('./LinkedList');

let testList;

describe('LinkedList', () => {
  beforeEach(() => {
    testList = new LinkedList()
  })
  describe('addToTail', () => {
    it('should add a value to an empty list and set it as the head', () => {
      testList.addToTail(1);

      expect(testList.head.value).to.equal(1);
    })

    it('should add a value to a list with a length of 1', () => {
      testList.addToTail(1);
      testList.addToTail(2)

      expect(testList.head.nextNode.value).to.equal(2);
    })

    it('should add a value to a list with a length of 2', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      expect(testList.head.nextNode.nextNode.value).to.equal(3);
    })

    it('should add a value to a list with a length of 4', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);
      testList.addToTail(5);

      expect(testList.head.nextNode.nextNode.value).to.equal(3);
    })

    it('should increment the "size" property', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      expect(testList.size).to.equal(3)
    })
  })
  describe('addToHead', () => {
    it('should set the value as the head of an empty list', () => {
      testList.addToHead(1);

      expect(testList.head.value).to.equal(1);
    })

    it('should add the value as head of a list with 1 item in it', () => {
      testList.addToHead(1);
      testList.addToHead(2);

      expect(testList.head.value).to.equal(2);
    })

    it('should link the new head to point at the old head', () => {
      testList.addToHead(1);
      const oldHead = testList.head;
      testList.addToHead(2);
      expect(testList.head.nextNode).to.equal(oldHead);
    })

    it('should correctly add to the head of the list 5 times', () => {
      testList.addToHead(1);
      testList.addToHead(2);
      testList.addToHead(3);
      testList.addToHead(4);
      testList.addToHead(5);

      expect(testList.head.value).to.equal(5);
      expect(testList.head.nextNode.nextNode.nextNode.nextNode.value).to.equal(1);
    })
    it('should increment the list\'s "size" property by 1', () => {
      testList.addToHead(1);
      testList.addToHead(2);
      testList.addToHead(3);
      testList.addToHead(4);
      testList.addToHead(5);

      expect(testList.size).to.equal(5);
    })
  })
  describe('removeFromTail', () => {
    it('should return null for an empty list', () => {
      const actual = testList.removeFromTail();

      expect(actual).to.equal(null);
    })
    it('should return the last element of a list with 3 items in it', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      const actual = testList.removeFromTail();
      
      expect(actual.value).to.equal(3);
    })

    it('should remove the last element of a list with 3 items in it', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      testList.removeFromTail();
      
      expect(testList.head.nextNode.value).to.equal(2);
      expect(testList.head.nextNode.nextNode).to.equal(null);

    })

    it('should remove the only element of a list with 1 item in it', () => {
      testList.addToTail(1);

      testList.removeFromTail();
      
      expect(testList.head).to.equal(null);

    })
    it('should return the only element of a list with 1 item in it', () => {
      testList.addToTail(1);

      const actual = testList.removeFromTail();
      
      expect(actual.value).to.equal(1);
    })
    it('should decrement the list\'s size property by 1', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      testList.removeFromTail();

      expect(testList.size).to.equal(2);
    })
  })
  describe('removeFromHead', () => {
    it('should return null for an empty list', () => {
      const actual = testList.removeFromHead();

      expect(actual).to.equal(null);
    })
    it('should return the first element of a list with 3 items in it', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      const actual = testList.removeFromHead();

      expect(actual.value).to.equal(1);
    })

    it('should remove the first element of a list with 3 items in it', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      testList.removeFromHead();
      
      expect(testList.head.value).to.equal(2);
    })

    it('should remove the only element of a list with 1 item in it', () => {
      testList.addToTail(1);

      testList.removeFromHead();
      
      expect(testList.head).to.equal(null);

    })
    it('should return the only element of a list with 1 item in it', () => {
      testList.addToTail(1);

      const actual = testList.removeFromHead();
      
      expect(actual.value).to.equal(1);
    })
    it('should decrement the list\'s size property by 1', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      testList.removeFromHead();

      expect(testList.size).to.equal(2);
    })
  })
  describe('insertAt', () => {
    it('should insert a new value into an empty list', () => {
      testList.insertAt(0, 1);
      expect(testList.head.value).to.equal(1);
    })
    it('should insert a new value into the middle of a linked list with four items', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.insertAt(2, 2.5);

      expect(testList.head.nextNode.nextNode.value).to.equal(2.5);
    })
    it('should link the new list item to the next item in the linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.insertAt(2, 2.5);

      expect(testList.head.nextNode.nextNode.nextNode.value).to.equal(3);
    })
    it('should insert a new value at the start of a linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.insertAt(0, 0);

      expect(testList.head.value).to.equal(0);
      expect(testList.head.nextNode.value).to.equal(1);
    })
    it('should insert a new value at the end of a linked list with two items', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.insertAt(2, 3);

      expect(testList.head.nextNode.nextNode.value).to.equal(3);
    })
    it('should increment the linked list\'s "size" property', () => {
      testList.addToTail(1);
      testList.addToTail(2);

      testList.insertAt(1, 1.5);

      expect(testList.size).to.equal(3);
    })
    it('should not insert values at indices larger than the current size of the linked list', () => {
      testList.insertAt(1, 'Oops!');

      expect(testList.size).to.equal(0);
      expect(testList.head).to.be.null;
    })
    it('should not insert values at negative indices', () => {
      testList.insertAt(-1, 'Oops!');

      expect(testList.size).to.equal(0);
      expect(testList.head).to.be.null;
    })
  })
  describe('removeAt', () => {
    it('should remove items from the middle of a list of four', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      const nodeToRemove = testList.head.nextNode.nextNode;
      testList.removeAt(2);

      expect(testList.head.nextNode.nextNode).not.to.equal(nodeToRemove);
    })

    it('should reconnect the two sections of the linked list after the deletion', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.removeAt(2);

      expect(testList.head.nextNode.nextNode.value).to.equal(4);
    })

    it('should remove items from the head of the linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.removeAt(0);

      expect(testList.head.value).to.equal(2);
    })

    it('should remove items from the end of the linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);
      testList.addToTail(4);

      testList.removeAt(3);

      expect(testList.head.nextNode.nextNode.nextNode).to.be.null;
    })

    it('should decrement the "size" property of the linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);
      testList.addToTail(3);

      testList.removeAt(1);

      expect(testList.size).to.equal(2);
    })

    it('should not remove any items if index is larger than the size of the linked list', () => {
      testList.addToTail(1);
      testList.addToTail(2);

      testList.removeAt(3);

      expect(testList.size).to.equal(2);
    })

    it('should not remove any items if index is negative', () => {
      testList.addToTail(1);
      testList.addToTail(2);

      testList.removeAt(-1);

      expect(testList.size).to.equal(2);
    })
  })
})
