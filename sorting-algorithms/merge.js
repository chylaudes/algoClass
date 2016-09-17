/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/


function mergeSort(arr){//it takes in an array and divides it and uses the merge function to sort it into one array
  if (arr.length < 2) {
    return arr;
  } else {  //if it is not less than two than I want to divide it
    var Lside = arr.slice(0, arr.length/2); //divided it in half
    var Rside = arr.slice(arr.length/2);//check out the slice method the rest of arr
    var sortedLside = mergeSort(Lside);
    var sortedRside = mergeSort(Rside);
    return merge(sortedLside, sortedRside);
  }
}

function merge(L, R){ //[3,8], [2,6]
  var sortArr = []; //[2, 3, 6]
  var Lpointer = 0; //1
  var Rpointer = 0; //2
  while (Lpointer <= L.length && Rpointer <= R.length) {// 1 === 2 && 2 === 2
    //console.log("Lpointer= ", Lpointer, " Rpointer= ", Rpointer, " LLength= ", L.length, " RLength= ", R.length);
    if (L[Lpointer] === undefined) {
      sortArr.push(R[Rpointer]);
      break;
    }
    else if (R[Rpointer] === undefined ){
      //console.log("HIT", R[Rpointer]);
      sortArr.push(L[Lpointer]);
      break;
    }
    else if (L[Lpointer] < R[Rpointer]) { // 8
      sortArr.push(L[Lpointer]);//L is pushed to sortArr
      ++Lpointer; //increment L
      //console.log("HIT Lpointer", Lpointer);
    }
    else {
      sortArr.push(R[Rpointer]);//R is pushed to SortArr
      ++Rpointer;//increment R
      //console.log("HIT Rpointer", Rpointer);
    }
  }
  return sortArr;
}

mergeSort([14,2,5,9,7,13,1,66,12,8]);

merge([3,8], [2,6]);
//[2, 3, 6, 8]
