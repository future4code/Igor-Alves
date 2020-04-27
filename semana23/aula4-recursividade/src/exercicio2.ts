// Ex.: 2

// function sumPredecessorsNumbers(num: number, sum: number = 0): number {
//   for(let i = num; i > 0; i--) {
//     sum += i
//   }
//   return sum
// }

function sumPredecessorsNumbers(num: number, sum: number = 0): number {
  if (num <= 0) {
    return sum;
  }
  return sumPredecessorsNumbers(num - 1, sum + num);
}

console.log(sumPredecessorsNumbers(5));