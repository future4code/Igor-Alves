 /**
  * 
  *  Determine a complexidade dos seguintes algoritmos
  * 
  */

 function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}

// Resposta: O(n) e O(n2)