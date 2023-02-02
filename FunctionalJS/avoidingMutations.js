// instead of myArray.push(element)
function push(element, array) {
  return [...array, element];
}

// instead of myArray[index] = value
// My solution, works but in essence still uses what we're trying to avoid, index assignment
// function update(index, value, array) {
//   const returnArr = [...array]
//   returnArr[index] = value;
//   return returnArr;
// }
// Course solution
function update(index, value, array) {
  return array.slice(0, index - 1).concat([value]).concat(array.slice(index));
}


// instead of myArray.pop();
function pop(array) {
  return array.slice(0, array.length - 1)
}