/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/


function flatten(array){ // {1} array =[1,[2],[3, [[4]]]]
  var newArray = []; // {1} [1, 2, 3, 4]
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){ //[3, [[4]]] true
      var arr = flatten(array[i]); // [3,]4
      newArray.concat(arr);
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray
}

function flatten(array){ // {2} array = [3, [[4]]]
  var newArray = []; // {2} [3, 4]
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){ //[[4]]
      var arr = flatten(array[i]); // [4]
      newArray.concat(arr);
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray //[3,4]
}



function flatten(array){ // {3} array = [[4]]
  var newArray = []; // {3} [4]
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){ // [4]
      var arr = flatten(array[i]); //[4]
      newArray.concat(arr);
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray //[4]
}

function flatten(array){ // {4} array = [4]
  var newArray = []; // {4} [4]
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){ // 4
      var arr = flatten(array[i]);
      newArray.concat(arr);
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray // {4} [4]
}
