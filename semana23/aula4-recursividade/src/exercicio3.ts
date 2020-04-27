// Ex.: 3

// function printArrayItens(arr: any[]): void {
//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }

function printArrayItens(arr: any[], i: number = 0): void {
  if (i < arr.length) {
    console.log(arr[i]);
    printArrayItens(arr, i + 1);
  }
}

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

const arrayOfLetters: string[] = ["a", "b", "c", "d", "e"];

printArrayItens(arrayOfLetters)