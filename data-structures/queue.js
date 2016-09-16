/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

 */
// TRY ADDING A HEAD AND A TAIL!! :)
function Queue(capacity) {
  // implement me...
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Queue.prototype.enqueue = function(value) {
    //conditional that if it reaches to a certain capacity
    if (this._capacity > this._count) {
      this._count++;
      this._storage[this._count] = value;
    } else {
      console.log("MAXIMUM CAP REACHED");
    }
    // adding something to storage
    //add it's count
};
// Time complexity:

Queue.prototype.dequeue = function() {
  var first = Object.keys(this._storage)[0];
  delete this._storage[first];
  this._count--;
  // implement me...
};
// Time complexity:

Queue.prototype.peek = function() {
  // implement me...
  var first = Object.keys(this._storage)[0];
  return  this._storage[first];
};

Queue.prototype.count = function() {
  return this._count;
};
// Time complexity:



/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.

 */

 var menu = new Queue();

 menu.enqueue("RedBeans");
 menu.enqueue("GreenBeans");
 menu.enqueue("Salad");
 menu.enqueue("Salsa");
 console.log("Storage", menu._storage);
 console.log("Count: ", menu.count());
 console.log("PEEK", menu.peek());

 menu.dequeue();
 console.log("Storage", menu._storage);
 console.log("Count: ", menu.count());
 console.log("PEEK", menu.peek());

 menu.dequeue();
 console.log("Storage", menu._storage);
 console.log("Count: ", menu.count());
 console.log("PEEK", menu.peek());

 //// STACK HAS BEEN REACHED //////
 console.log("//////////////////// NEW MENU ////////////////////////");
 var menu2 = new Queue(3);

 menu2.enqueue("RedBeans");
 console.log("Storage", menu2._storage);

 menu2.enqueue("GreenBeans");
 console.log("Storage", menu2._storage);

 menu2.enqueue("Salad");
 console.log("Storage", menu2._storage);

 menu2.enqueue("Salsa");
 console.log("Storage", menu2._storage);


 console.log("//////////////////// TWO STACKS  ////////////////////////");
