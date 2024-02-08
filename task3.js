// Your task is to calculate the total budget required to buy electronics:
//       laptop = 35000 tk
//       tablet = 15000 tk
//       mobile = 20000 tk
//   Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablet, mobile) {
  return laptop + mobile + tablet;
}
let laptop = 35000;
let tablet = 15000;
let mobile = 20000;
const result = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(result);
