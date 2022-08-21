# Linked List Exercises

These exercises are meant to help you develop an understanding of the inner workings of a linked list.  You will have some time in class to work on them, but it is unlikely you will complete them all in class.  You are welcome to continue working on these exercises after class ends, and if you have any questions you can email Ian at this address: `ian.culleton.92@gmail.com`. 

For diagrams of the structure of a linked list, please see the lesson slides [here](https://docs.google.com/presentation/d/162fNxQIyjF6VkJj-384GNsC2vbmS72vs48xC-fFqCZ0/edit?usp=sharing). 

Solution code for these exercises may be found on the `solution` branch of this github repository.  **Please do not look at solution code until you've attempted the exercise yourself first.**

## How to get started

1. Make sure you have npx installed 
    * type `which npx` into your terminal.  
    * If a path prints out, you're already set up.
    * If nothing prints out, please let your instructor know.
1. Fork this repository, then clone your fork.
1. Install the dependencies:  `npm install`.

## Working through the exercises

1. Run the tests: `npm test`.
    * You should see a failing test.
1. Write the code in `LinkedList.js` needed to make the test pass.
    * When you pass the first test, a new failing test will appear.
1. Repeat these stepsuntil no more tests appear.

## List of methods to implement

* [ ] `addToTail(value)` — adds an item (or "node") to the end of the list.  The item's value is passed in as an argument.
* [ ] `addToHead(value)` — Adds an item to the beginning of the list.  Again, the item's value is passed in as an argument
* [ ] `removeFromTail()` — Removes an item from the end of the list.
* [ ] `removeFromHead()` — Removes an item from the beginning of the list
* [ ] `insertAt(index, value)` — inserts an item with the specified value into the list in the position specified by the `index` parameter.
* [ ] `removeAt(index)` — removes the item stored at the specified index.