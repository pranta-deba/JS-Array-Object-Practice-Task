//   Find the friend with the smallest name.
//   const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr) {
  const process = arr.sort((a,b)=> a.length - b.length);
  const smallName = process[0];
  return smallName;
}
const array = ["rahim", "robin", "rafi", "ron", "rashed"];
const result = smallestName(array);
console.log(result);
