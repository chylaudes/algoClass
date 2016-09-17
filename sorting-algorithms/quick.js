/*
MERGE SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

partition(arr, lo, hi)
  choose last element as pivot // arr[arr.ln] (4)

  keep track of index for pivotLoc
  initialized as lo

  for i, loop from low to high //0 to arr.ln
    if current arr[i] <= pivot 7<= false
      swap pivotLoc and i
      increment pivotLoc
    else
    save 4 in a variable
    swap arr[arr.ln] with arr[i]
    move 5 to i move 4 to arr.ln-1-i

// is 3 less than four? Yes
  // we increment our pivot location now it is 1
//is 7 less than four? No
  //we want 7 to be at the end
  // save 4 in var
  //swap 7 with 4
  //swap 4 with 5 which is arr.ln-1-i *** which is arr.ln-1-1
// is 5 less than four? no
  //we want 5 where four is which is arr.ln-1-1
  // save 4 in var
  // swap 5 with 4
  //swap 2 with 4
// is 2 less than four? yes
  // we increment our pivot location now it is 2



  //once the pivotLocation is at its pivot than it is in its final place

We want to keep track of the array that is less than our pivot point

We want to keep track of the element in question,

[3,1,2,6,4,5,7]

function partition(arr, first, last){
  var pivotLoc = first;
  var pivot = last;
  pivotVal = arr[last]
  loop from lo to hi
    compare pivot to arr[pivotLoc]
    if our arr[pivotLoc] is < pivot
      increment pivotLoc
    else
      swap arr[pivotLoc] with pivot
      swap pivot with arr[ln-1-pivotLoc]// maybe we need to keep track of it
}


//add in yout break when your pivot has landed
/*/
//STARTING ARRAY [3,5,2,1,6,7,4];
var array = [3,5,2,1,6,7,4];
var arrr = [30, 12, 41, 45, 13, 1, 5, 3, 2, 7, 9, 11, 28, 44, 55, 33, 90, 66];
partition(arrr, 0, arrr.length-1);
function partition(arr, first, last){
  var pivotLoc = first; // starting point your i this moves up {1} 0 {2} 1 {3} 1 {4} 1 {5} 2 {6} 3
  var pivotVal = arr[last]; // the value of the pivot or arr.length for now
  var pivot = last; //location of the pivot as it moves down {1} 6 {2} 6  {3} 5 {4} 4 {5} 3 {6} 3
    for (var i = 0; i < arr.length; i++) {
      if (arr[pivotLoc] < arr[pivot]) {
        ++pivotLoc; //{5} [3,1,2,4,6,7,5] //{6} [3,1,2,4,6,7,5]
      } else {
        swap(arr, pivot, pivotLoc); // {2} [3,4,2,1,6,7,5] {3} [3,4,2,1,6,7,5] {4}  [3,4,2,1,6,7,5]
        swap(arr, pivotLoc, pivot - pivotLoc ) // {2} [3,7,2,1,6,4,5] {3} [3,6,2,1,4,7,5] {4} [3,1,2,4,6,7,5]
        --pivot;
      }
    }
 return arr
}

function swap(arr, i1, i2){
  arr[i1] = arr[i1] ^ arr[i2];
  arr[i2] = arr[i1] ^ arr[i2];
  arr[i1] = arr[i1] ^ arr[i2];
  return arr;
}
function quickSort(arr){

}


function partition(arr, first, last){
  var pivotLoc = first; // starting point your i this moves up {1} 0 {2} 1 {3} 1 {4} 1 {5} 2 {6} 3
  var pivotVal = arr[last]; // the value of the pivot or arr.length for now
  var pivot = last; //location of the pivot as it moves down {1} 6 {2} 6  {3} 5 {4} 4 {5} 3 {6} 3
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[pivotLoc] < arr[pivot]) {
        ++pivotLoc; //{5} [3,1,2,4,6,7,5] //{6} [3,1,2,4,6,7,5]
      } else {
        arr = swap(arr, pivot, pivotLoc); // {2} [3,4,2,1,6,7,5] {3} [3,4,2,1,6,7,5] {4}  [3,4,2,1,6,7,5]
        arr = swap(arr, pivotLoc, pivot - pivotLoc ) // {2} [3,7,2,1,6,4,5] {3} [3,6,2,1,4,7,5] {4} [3,1,2,4,6,7,5]
        --pivot;
      }
    }
 return arr
}
