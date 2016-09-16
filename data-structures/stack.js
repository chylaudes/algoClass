/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
  // implement me...
}

Stack.prototype.push = function(value) {
  //if the capacity is still bigger than count
  if (this._capacity > this._count) {
    this._count++;
    this._storage[this._count] = value;
  } else {
    console.log("Capacity has been reached");
    //the capacity has reached its limit
  }
};
// Time complexity:

Stack.prototype.pop = function() {
  //remove the last item of this._storage
  var last = this._storage[this._count];
  delete this._storage[this._count];
  this._count--;
  return last;
  //return the last item of this._storage
};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  var last = this._storage[this._count];
  return last;
};
// Time complexity:

Stack.prototype.count = function() {
  return this._count;
};
// Time complexity:



var menu = new Stack();

menu.push("RedBeans");
menu.push("GreenBeans");
menu.push("Salad");
menu.push("Salsa");
console.log("Storage", menu._storage);
console.log("Count: ", menu.count());
console.log("PEEK", menu.peek());

menu.pop();
console.log("Storage", menu._storage);
console.log("Count: ", menu.count());
console.log("PEEK", menu.peek());

menu.pop();
console.log("Storage", menu._storage);
console.log("Count: ", menu.count());
console.log("PEEK", menu.peek());

//// STACK HAS BEEN REACHED //////
console.log("//////////////////// NEW MENU ////////////////////////");
var menu2 = new Stack(3);

menu2.push("RedBeans");
console.log("Storage", menu2._storage);

menu2.push("GreenBeans");
console.log("Storage", menu2._storage);

menu2.push("Salad");
console.log("Storage", menu2._storage);

menu2.push("Salsa");
console.log("Storage", menu2._storage);

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

///// MIN STACK ///////

function MinStack (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

//{what: MinStack, cap: Infinity, storage:{}, count: 0, min: { what: Stack, capacity: Infinity, storage: {}, count: 0 } }

MinStack.prototype.push = function(value) {
 if (this._count < this._capacity) {
   if (this._min.peek() < value ) {
     this._min.push(this._min.peek());
    } else {
      this._min.push(value);
     }
     this._storage[++this._count] = value;
 } else {
   console.log("MAXED REACHED");
 }
 return this._storage[this._count];
}; //end of push


MinStack.prototype.pop = function(){
  //delete last item in storage
  var last_store = this._storage[this._count];
  delete this._storage[this._count];
  this._count--;
  this._min.pop();
  return last_store;

  //delete last item in _min
};

MinStack.prototype.peek = function(){
  var last = this._storage[this._count];
  return last;
};

MinStack.prototype.count = function(){
  return this._count;
};

MinStack.prototype.min = function(){
  return this._min.peek();
};
console.log("//////////////////// MIN STACK ////////////////////////");

var ms = new MinStack();

ms.push(7);
ms.push(20);
ms.push(14);
ms.push(3);
ms.push(6);
ms.push(10);
ms.push(4);
ms.push(1);
ms.push(1);
ms.push(1);

console.log("Min Stack", JSON.stringify(ms._storage, null, 2));
console.log("Min Stack minimummmmm", JSON.stringify(ms._min, null, 2));
ms.pop();

console.log("Min Stack", JSON.stringify(ms._storage, null, 2));
console.log("Min Stack minimummmmm", JSON.stringify(ms._min, null, 2));

console.log("count should be 9", ms.count());
console.log("MINIMUMM should be 1", ms.min());


ms.pop();
ms.pop();

console.log("Min Stack", JSON.stringify(ms._storage, null, 2));
console.log("Min Stack minimummmmm", JSON.stringify(ms._min, null, 2));

console.log("count should be 7", ms.count());
console.log("MINIMUMM should be 3", ms.min());

//Minimum stack keeps track of the state of the minimum stack of every push


function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();// this checks if there's nothing in stackOut if there is
  //nothing then transfer the stacks
  return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.peek();
};
