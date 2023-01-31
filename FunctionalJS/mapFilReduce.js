wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven(n) {
  return n % 2 == 0;
}

odds = filter(n => {
  return n % 2 != 0;
}, wholes)

greaterThanFour = filter(
  (n) => { return n > 4}, // TODO replace this line
  wholes)


function isPrime(n) {
  if (n <= 1) return false;
  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = filter(m => m > 1 && m < n, wholes);
  const factors = filter(m => n % m === 0, possibleFactors);
  return factors.length === 0 ? true : false;
}

function map(fn, array) {
  // If the array length is 0, return an empty array
  if (length(array) === 0) return [];
  // Otherwise, create an array by running the input function on the first item of the input array
  // Then concatenate that array with a recursion of the mapping function that updates the input array to be the rest of the original input array
  return [fn(head(array))].concat(map(fn, tail(array)));
}


fizzBuzz = map(n => {
  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz"
  else if (n % 3 == 0) return "fizz"
  else if (n % 5 == 0) return "buzz"
  else return n
}, wholes)

max = reduce(
  (acc, curr) => {
    return acc < curr ? curr : acc;
  }, 
  0, 
  [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9]
)