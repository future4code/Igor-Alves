/**
 * //Exercícios de Interpretação de Código
 * 
 * //1 - 
 * 
 * Qual teste ele realiza?
 * R. O código verifica se o número que o usuário digitou é um número par. Utilizando if com a condição (o número digitado mod  2 tem que ser igual a 0).
 * 
 * Para que tipos de números ele imprime no console "Passou no teste"?
 * R. Para os números pares.
 * 
 * Para que tipos, a mensagem é "Não passou no teste"? 
 * R. Para os números ímpares.
 * 
 * //2-
 * 
 * A. Para que serve o código acima?
 * Serve para quando o usuário digitar o nome de uma fruta, ser mostrado o seu respectivo valor (dentre os cases), caso a fruta digitada não apresente um case específico será mostrado o valor deafult, no caso, seria R$5. Utilizar o switch case serve para evitar com que seja escrito diversos blocos de if e else if, fazendo com que não haja a necessidade de se chegar todas as condições, nome por nome, caso já encontre o case correto, ele para e sai do bloco.   
 *  
 * B. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
 * A mensagem é: O preço da fruta  Maçã  é  R$  2.25
 * 
 * C. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
 * Eu pagaria por essas frutas R$24.25
 * 
 * D. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
 * A mensagem que seria impressa é: O preço da fruta  Pêra  é  R$  5
 * 
 * //3-
 * 
 * Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
 * R. Não irá mostrar a mensagem no terminal, irá ocorrer um erro. Pois como a variável mensagem foi definida dentro do bloco do if, então ela não poderar ser mostrada fora desse bloco, no caso ao colocar o comando console.log no final do código, não fara a mensagem aparecer, pois para o interpretador essa variável não foi definida, ele pertence somente ao escopo do if e não ao bloco global do código.  
 * 
 */
 

//Exercícios de escrita de código

//1-
//A.

let primeiroNumero = Number(prompt("Digite aqui o primeiro número: "))
let segundoNumero = Number(prompt("Digite aqui o segundo número: "))

if(primeiroNumero > segundoNumero) {
  console.log(primeiroNumero, segundoNumero)
} else {
 console.log(segundoNumero,primeiroNumero)
}
//Caso os dois números sejam iguais o programa executa o else, mostrando na frente o segundo número e depois o primeiro. 


//B.

primeiroNumero = Number(prompt("Digite aqui o primeiro número: "))
segundoNumero = Number(prompt("Digite aqui o segundo número: "))
let terceiroNumero = Number(prompt("Digite aqui o terceiro número: "))

if(primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
  console.log(primeiroNumero, segundoNumero, terceiroNumero)
} else if (terceiroNumero > segundoNumero && segundoNumero > primeiroNumero) {
  console.log(terceiroNumero, segundoNumero, primeiroNumero)
} else if (primeiroNumero > segundoNumero && terceiroNumero > primeiroNumero) {
  console.log(terceiroNumero, primeiroNumero, segundoNumero)
} else if (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero) {
  console.log(segundoNumero, primeiroNumero, terceiroNumero)
}
//Caso os 3 numeros sejam iguais não mostrará nenhum resultado.

//C.

primeiroNumero = Number(prompt("Digite aqui o primeiro número: "))
segundoNumero = Number(prompt("Digite aqui o segundo número: "))
terceiroNumero = Number(prompt("Digite aqui o terceiro número: "))

  
if (primeiroNumero === segundoNumero && segundoNumero === terceiroNumero){
  console.log("Insira ao menos um número diferente")
} else if(primeiroNumero >= segundoNumero && segundoNumero > terceiroNumero) {
  console.log(primeiroNumero, segundoNumero, terceiroNumero)
} else if (terceiroNumero >= segundoNumero && segundoNumero > primeiroNumero) {
  console.log(terceiroNumero, segundoNumero, primeiroNumero)
} else if (primeiroNumero > segundoNumero && terceiroNumero >= primeiroNumero) {
  console.log(terceiroNumero, primeiroNumero, segundoNumero)
} else if (segundoNumero >= primeiroNumero && primeiroNumero > terceiroNumero) {
  console.log(segundoNumero, primeiroNumero, terceiroNumero)
}

//2-
//A. 
//https://drive.google.com/file/d/1SN8MKAHHGXNWycf3PpfqP6RZBSjkdsNC/view?usp=sharing

//B.

const temOsso = prompt("Possuem osssos formando seu esqueleto? [s/n]")

if (temOsso === "s") {
  const temPelo = prompt("Possui pelos? [s/n]")
    if (temPelo === "s"){
      const racional = prompt("É racional? [s/n]")
      if (racional === "s"){
        console.log("É classificado como humano.")
      }else{
        console.log("É classificado como mamífero não humano.")
      }
    } else {
      const penas = prompt("Possui penas? [s/n]")
      if (penas === "s"){
        console.log("É classificado como ave.")
      }else {
        const terrestre = prompt("É um animal terrestre? [s/n]")
        if (terrestre === "s") {
          const aquatico = prompt("Passa uma parte da vida em ambiente aquático? [s/n]")
          if (aquatico === "s"){
            console.log("É classificado como anfíbio.")
          }else{
            console.log("É classificado como réptil.")
          }
        }else{
          console.log("É classificado como peixe.")
        }
      }
    }
} else {
  console.log("É classificado como invertebrado.")
}

//3-

const nomeCompleto = prompt("Digite o seu nome completo: ")
const tipo = prompt("Digite o tipo de jogo: ")
let etapa = prompt("Digite a etapa do jogo: [SIGLA]")
const categoria = prompt("Digite a categoria do jogo: ")
const quantidade = prompt("Digite a quantidade de ingressos que deseja comprar: ")
const dolar = 4.10
let valorIngresso = 0

if(etapa === "SF"){
  switch (categoria){
    case "1":
    valorIngresso = 1320.00
    break;

    case "2":
    valorIngresso = 880.00
    break;

    case "3":
    valorIngresso = 550.00
    break;

    case "4":
    valorIngresso = 220.00
    break;
  }
  etapa = "Semifinais" 
} else if (etapa === "DT"){
  switch (categoria){
    case "1":
    valorIngresso = 666.00
    break;

    case "2":
    valorIngresso = 440.00
    break;

    case "3":
    valorIngresso = 330.00
    break;

    case "4":
    valorIngresso = 170.00
    break;
  }
  etapa = "Decisão do 3º lugar"
}else if (etapa === "FI"){
  switch (categoria){
    case "1":
    valorIngresso = 1980.00
    break;

    case "2":
    valorIngresso = 1320.00
    break;

    case "3":
    valorIngresso = 880.00
    break;

    case "4":
    valorIngresso = 330.00
    break;
  }
  etapa = "Final"
}

let valorTotal = valorIngresso * quantidade

console.log("---Dados da compra---")
console.log("Nome do cliente: ", nomeCompleto)
console.log("Tipo do jogo: ", tipo)
console.log("Etapa do jogo: ", etapa)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos: ", quantidade, "ingresso(s)")
console.log("---Valores---")

if (tipo === "Internacional"){
  valorIngresso /= dolar
  valorTotal /= dolar
  console.log("Valor do ingresso: U$", valorIngresso)
  console.log("Valor total: U$", valorTotal)    
}else{
  console.log("Valor do ingresso: R$", valorIngresso)
  console.log("Valor total: R$", valorTotal)
}




