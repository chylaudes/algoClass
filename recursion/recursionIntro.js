//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
  function loopDown(n){
    var currentNum = n;
    while (currentNum !== 0) {
      currentNum--;
    }
    return currentNum;
  }
  loopDown(10);

//2. Next, try looping just like above except using recursion
  function loopDownR(n){
    if (n === 0) {
      return n;
    } else
    n--;
    return loopDownR(n);
  }

  loopDownR(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
//3^2 = 3* 3
  function exponent(expo, base){
    var result = base;
    while (expo > 1) {
      result = result * base;
      expo--;
    }
    return result;
  }

  // console.log("3^4", exponent(4, 3));
  // console.log("3^7", exponent(7, 3));
  // console.log("3^9", exponent(9, 3));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recurseExpo(expo, base) {
  if (expo === 1) {
    return base;
  } else {
    expo--; //
    return base * recurseExpo(expo, base);
  }
}

console.log("3^4", recurseExpo(4, 3));
console.log("3^7", recurseExpo(7, 3));
console.log("3^9", recurseExpo(9, 3));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recurseMulti(arr, num){
//[1,2,3,4] * 2 result = [2,4,6,8]
  if (arr.length === 0) {
    return arr;
  } else {
    var last = arr.pop() * num;
    recurseMulti(arr, num);
    arr.push(last);
    return arr;
  }
}
//========== STACK ============
 //[1,2,3,4] * 2 result = [2,4,6,8]

console.log("YOOOO RECURSE MULTI", recurseMulti([1,2,3,4], 2) );





//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recurseRev(arr){ //[1,2,3,4] =>[4,3,2,1]
  if (arr.length === 0) {
    return arr;
  } else {
    var first = arr.shift();
    recurseRev(arr); //[1,2,3]
    arr.push(first);
    return arr;
  }
}


console.log("YOOOO RECURSE REV", recurseRev([1,2,3,4]) );
