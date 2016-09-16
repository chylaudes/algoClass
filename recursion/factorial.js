/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
// PSUEDO CODE

//num = 5
function factorial(num) { // {1} 5 {2} 4 {3} 3 {4} 2 {5} 1 <== this will return a value
  if (num === 1) {
    //this statement will return a value without recursion
    return 1
  } else {
    return num * factorial(num - 1) //{1} 5 * 36
  }
}


//returns 180 :)
