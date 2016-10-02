/*
Write a function that takes two numbers and returns the greatest common divisor.
Greatest common divsor is the greatest numberthat can be divided for two integers
GCD(12,60) = 12
GCD(3,5) = 1
GCD (12, 3)
GCD(7, 49)
GCD (7,4)
GCD(12,8) = 4
*/

// 28 = 7
function gcd(num1, num2) { // {1} 3,5
  var min = Math.min(num1, num2); // {1} min = 3
  var max = Math.max(num1, num2); // {1} max = 5
  if (max % min === 0) return min; //
  else return gcd(min, max % min); // {1} 1 // this where the recursion happens
}


// the remainder of the MAX % MIN is important because it signifies whether or not the remainder can be
//divided the min number.  if it isn't we need to find the next min number with its remainder.
