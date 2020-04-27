 /**
  * 
  *  Determine a complexidade dos seguintes algoritmos
  * 
  */

 function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}

// Resposta: O(1)