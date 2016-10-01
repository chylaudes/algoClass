/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
// PSUEDO CODE

//num = 5
factorial(5);
function factorial(num) { // {1} num = 5
  if (num === 1) {
    //this statement will return a value without recursion
    return 1
  } else {
    return num * factorial(num - 1) //{1} 5 * 24
  }
}
