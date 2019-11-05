/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 * 
 * O código está fazendo um loop, declarando a variável i = 0, e enquanto essa variável i for menor que 11 ele adiciona na variável sum a soma do valor da variável sum com o valor da variável i. O resultado impresso é: 55
 * 
 */

/**
 * EXERCÍCIO 2
 * A.
 * Ele adciona um ou mais elementos ao final da lista.
 */

/**
 * B.
 * O valor impresso será: [ 10, 15, 20, 25, 30 ]
 */

/**
 * C.
 * Caso a variável numero tivesse o valor 3, ele imprimiria os números que são multiplos de 3, no caso: [ 12, 15, 18, 27, 30 ]
 * No caso da variável numero possuir o valor 4, ele imprimiria os números que são multiplos de 4, no caso: [ 12, 20 ]
 */

/**
 * EXERCÍCIO 3
 * O resultado impresso caso o usuário digite o número 4, seria:
  0
  00
  000
  0000
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 */
/**
 * EXERCÍCIO 4
 * */
/**
 * A.
 * */
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
  let maior = arrayOriginal[0]
  let menor = arrayOriginal[0]

  for (let num of arrayOriginal){
    if(num > maior){
      maior = num
    } else if(num < menor){
      menor = num
    }
  }
  console.log("O maior número é", maior, "e o menor é", menor)

/**
 * B.
 * */
  const novoArray = []
  let umDecimo = 0

  for(let i = 0; i < arrayOriginal.length; i++){
    umDecimo = arrayOriginal[i] / 10
    novoArray.push(umDecimo)
  }
  console.log(novoArray)

/**
 * C.
 * */
  const arrayImpar = []
  let impar = 0

  for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] % 2 !== 0){
      impar = arrayOriginal[i]
      arrayImpar.push(impar)
    }
  }
  console.log(arrayImpar)

/**
 * D.
 * */
  const stringArray = []
  let i = 0

  while (i < arrayOriginal.length){
    let numero = arrayOriginal[i]
    let frase = "O elemento do Índex " + i + " é " + numero
    stringArray.push(frase)
    i++
  } 
  console.log(stringArray)

/**
 * EXERCÍCIO 5
 * */
  const numSecreto = Number(prompt("Escolha o número a ser descoberto: "))
  console.log("Vamos jogar!")

  let numJogador = Number(prompt("Digite um número: "))
  let tentativas = 1 

  while (numJogador !== numSecreto){
    if (numSecreto > numJogador){
      let texto = "O número chutado foi: " + numJogador
      let dica = "Errrrrrrrou, é maior"
      console.log(texto)
      console.log(dica)

    }else if (numJogador > numSecreto){
      let texto = "O número chutado foi: " + numJogador
      dica = "Errrrrrrrou, é menor"
      console.log(texto)
      console.log(dica)
    }
    numJogador = Number(prompt("Digite um número: "))
    tentativas += 1
  }

  console.log("O número chutado foi: " + numJogador)
  console.log("Acertou!!")
  console.log("O número de tentativas foi: " + tentativas)
  
/**
 * EXERCÍCIO 6
 * */
  const numComputador = Math.floor((Math.random() * 100) + 1)
  console.log("Vamos jogar!")

  let chute = Number(prompt("Digite um número: "))
  let rodada = 1 

  while (chute !== numComputador){
    if (numComputador > chute){
      let texto = "O número chutado foi: " + chute
      let dica = "Errrrrrrrou, é maior"
      console.log(texto)
      console.log(dica)

    }else if (numComputador < chute){
      let texto = "O número chutado foi: " + chute
      dica = "Errrrrrrrou, é menor"
      console.log(texto)
      console.log(dica)
    }
    chute = Number(prompt("Digite um número: "))
    rodada += 1
  }

  console.log("O número chutado foi: " + chute)
  console.log("Acertou!!")
  console.log("O número de tentativas foi: " + rodada)
  
 /**
  * Foi fácil realizar a alteração, pois bastava alterar a constante para receber o número aleatório vindo do metodo ramdom. E utilizando o material contido no w3schools, não tive dificuldade para fazer gerar um número randomico entre 1 e 100.
  * 
  obs: alterei o nome das variáveis do exercício 6 para permitir a execução dos exercícios 5 e 6 sequencialmente.
*/

  