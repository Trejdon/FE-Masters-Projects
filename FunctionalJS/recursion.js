// Writing an interative and recursive version of a function that returns the nth Fibonacci number

function iterativeFibonacci(n) {
  let count = 0;
  let previousOne = 0;
  let previousTwo = 0;
  let currentValue;
  while ( count < n) {
    if ( count == 1) {
      previousOne = 1;
    }
    count++;
    currentValue = previousOne + previousTwo;
    previousTwo = previousOne;
    previousOne = currentValue;
  }

  return currentValue;
}

function recursiveFibonacci(n) {
  // // These become our base case
  // if (n == 0) {
  //   return n;
  // }
  // if (n == 1) {
  //   return n;
  // }

  // // These become our recursive branch

  // if ( n == 2 ) {
  //   // What we need to return
  //   // return 0 + 1
  //   // 0 = recursiveFibonacci(0) { recursiveFibonacci(n-2)}
  //   // 1 = recursiveFibonacci(1) { recursiveFibonacci(n-1)}
  //   // 
  //   return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
  // }

  // if ( n == 3) {
  //   // What we need to return
  //   // return 1 + 1
  //   // 1 = recursiveFibonacci(1) { recursiveFibonacci(n-2)}
  //   // 1 = recursiveFibonacci(2) { recursiveFibonacci(n-1)}
  //   // 
  //   return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
  // }

  if (n < 2) {
    return n;
  } else {
    return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
  }

}


// 0 = 0
// 1 = 1
// 2 = 1
// 3 = 2
// 4 = 3
// 5 = 5
// 6 = 8
// 7 = 13