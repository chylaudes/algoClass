/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  var node = this.head;
  while (node) {
    callback(node.value);
    node = node.next;
  }
};
// Time complexity:

LinkedList.prototype.print = function() {
  var str = "";
  var currentNode = this.head
  if (this.head.value === null) {
   return "There's nothing in the head"
  }
  while (currentNode) {
    if (currentNode.next !== null) {
      str = str.concat(currentNode.value.toString()+", ");
      currentNode = currentNode.next;
    } else {
      str = str.concat(currentNode.value.toString());
      break;
    }
  }
  return str
  // implement me...
};
// Time complexity:
/* SHORT HANDED FOR EACH
LinkedList.prototype.print = function() {
  var result = [];
  this.forEach(function(value) {
    result.push(value);
  });
  return result.join(', ');
};
*/
LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...

  var currentNode = this.head//one have a starting point which is head
  while(currentNode.value){
    if (currentNode.value !== node) {
      currentNode = currentNode.next
    } else {
      var temp = currentNode.next;
      currentNode.next = new Node(value);
      currentNode.next.next = temp;
      break;
    }
  }//check to see if the head is the nodevalue if not continue on
  //starting with head we check the next node to see if it has the nodevalue
    //if the currentNode.next !== node
    //then currentnode is currentNode.next
    //and keep checking for that nodevalue
  //else the currentNode.next is the value
    //currentNode = currendNode.next
    //var temp = currentNode.next
    //currentNode.next = New Node(value)
    //currentNode.next.next = temp
    //break

};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  // implement me...
}

LinkedList.prototype.findNode = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
};
// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:


LinkedList.prototype.addToTail = function(value){
  // start at the head and check if the this.next === to null
  var currentNode;
  if (this.head.next !== null) {
    currentNode = this.head.next;
    while ( currentNode ) {
      if (currentNode.next === null) {
        currentNode.next = new Node(value);
        break;
      } else {
        currentNode = currentNode.next
      }
    }

  }
  else {
      this.head.next = new Node(value)

  }
  //if this.next === to null set its next to a new Node with the value
}

LinkedList.prototype.removeNode = function (value) {
  if (this.head.value === value) {
    delete this.head
  } else {
    var currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.value !== value) {
        if (currentNode.next.next !== null) {
          currentNode = currentNode.next
        } else {
          return "Node does not exist pick another one!!";
        }
      }
      else {
        currentNode.next = currentNode.next.next
        break;
      }
    }

  }

  //we must traverse down the list and find the value
  //when we find the value we must point it to the next next
}


var list = new LinkedList(1)
console.log("List: ", list);
var adding = list.addToTail(2);
var hello = list.addToTail(3);
var hello = list.addToTail(4);
var hello = list.addToTail(5);
var hello = list.addToTail(6);
// console.log("List: ", JSON.stringify(list, null, 2));
list.removeNode(5);
console.log("List: ", JSON.stringify(list, null, 2));
console.log(list.print());
list.insertAfter(2, 10);
console.log("List: ", JSON.stringify(list, null, 2));
console.log(list.print());

/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
