 /**
  * 
  *  Determine a complexidade dos seguintes algoritmos
  * 
  */

 function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}

// Resposta: O(n2)