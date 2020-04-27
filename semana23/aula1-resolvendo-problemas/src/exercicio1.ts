 /**
  * 
  *  Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações.
  *  Escreva um método que determine se uma string é  'one edit' de outra.
  * 
  */

export const checkOneEditString = (comparison: string, source: string ): boolean => {
  if(comparison.length > source.length + 1 || comparison.length < source.length - 1) {
    return false
  }

  let differentChars = 0

  if(comparison.length < source.length || comparison.length > source.length) {
    return true
  }

  for(let char of comparison){
    if(source.indexOf(char) === -1) {
      differentChars += 1 
    }
  }
  
  if(differentChars === 0 || differentChars === 1) {
    return true
  }

  return false
};
