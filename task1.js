// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const numbers = [167, 190, 120, 165, 1, 137];

function minNum(arr) {
  // validation
  if (!Array.isArray(arr)) {
    return "Please provide a array";
  } else if (Array.isArray(arr)) {
    for (const number of arr) {
      if (typeof number !== "number") {
        return "Please provide a number of array";
      }
    }
  }
  // min number find
  let emptyArr = arr[0];
  for (const number of arr) {
    if (emptyArr > number) {
      emptyArr = number;
    }
  }
  return emptyArr;
}
const result = minNum(numbers);
console.log(result);
