 /**
  * 
  *  Determine a complexidade dos seguintes algoritmos
  * 
  */

 function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}

// Resposta: O(b)