// Recursividade

// Ex.: 1

function printCrescentPredecessorsNumber(num: number): void {
  if (num >= 0) {
    printCrescentPredecessorsNumber(num - 1);
    console.log(num);
  }
}

function printDecrescentPredecessorsNumber(num: number): void {
  if (num >= 0) {
    console.log(num);
    printDecrescentPredecessorsNumber(num - 1);
  }
}

console.log("###  Ordem Crescente  ###")
printCrescentPredecessorsNumber(5)
console.log("###  Ordem Decrescente  ###")
printDecrescentPredecessorsNumber(5)