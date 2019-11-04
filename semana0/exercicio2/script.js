/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 * a. false
 * b. false
 * c. true
 * d. false
 * e. boolean
 */

/**
 * EXERCÍCIO 2
 * A.
 * Array é uma maneira de se guardar e acessar mais de uma informação ao mesmo tempo.
 * A declaração de um Array pode ser realizada com: const/let, seguido pelo do nome do array, sinal de atribuição (=), após os valores separados por virgula dentro de colchetes ([]).
 * exemplo: const array = [1, 2, 3, 4]
 */

/**
 * B.
 * O index inicial de um array é 0.
 */

/**
 * C.
 * O tamanho de um array pode ser determinado pelo comando .length.
 * exemplo: array.length
 */

/**
 * D.
 * I. undefined
 * II. null
 * III. 11
 * IV. 3 e 4
 * V. 19 e 9
 * VI. 3
 * VII. 1
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */
  const grauFahrenheit = "°F"
  const unidadeKelvin = "K"
  const grauCelsius = "°C"

  //A.
    let fahrenheit = 77
    let kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15

    console.log("A. " + fahrenheit + grauFahrenheit + " = " + kelvin + unidadeKelvin);

  //B.
    let celsius = 80
    fahrenheit = (celsius * 9) / 5 + 32

    console.log("B. " + celsius + grauCelsius + " = " + fahrenheit + grauFahrenheit);

  //C.
    celsius = 30;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;

    console.log("C. " + celsius + grauCelsius + " = " + fahrenheit + grauFahrenheit + " e " + kelvin + unidadeKelvin);

  //D.
    celsius = prompt("Insira o valor da temperatura em Grau Celsius:");
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;

    console.log("D. " + celsius + grauCelsius + " = " + fahrenheit + grauFahrenheit + " e " + kelvin + unidadeKelvin);
    console.log(" ")

/**
 * EXERCÍCIO 2
 */
    const pergunta1 = "1. Qual o seu nome?"
    const pergunta2 = "2. Qual a sua idade?"
    const pergunta3 = "3. Qual sistema operacional que você utiliza?"
    const pergunta4 = "4. Qual é a linguagem de programação que você utiliza no momento?"
    const pergunta5 = "5. Qual é o seu editor de código favorito?"
    const texto = "Resposta: "
    let resposta1 = prompt("Qual o seu nome?")
    let resposta2 = prompt("Qual a sua idade?")
    let resposta3 = prompt("Qual o sistema operacional que você utiliza?")
    let resposta4 = prompt("Qual é a linguagem de programação que você utiliza no momento?")
    let resposta5 = prompt("Qual é o seu editor de código favorito?")

    console.log(pergunta1);
    console.log(texto + resposta1);
    console.log(" ");

    console.log(pergunta2);
    console.log(texto + resposta2);
    console.log(" ");

    console.log(pergunta3);
    console.log(texto + resposta3);
    console.log(" ");

    console.log(pergunta4);
    console.log(texto + resposta4);
    console.log(" ");

    console.log(pergunta5);
    console.log(texto + resposta5);
    console.log(" ");

/**
 * EXERCÍCIO 3
 */
  let salarioMinimo = Number(prompt("Digite o valor do salário mínimo: "))
  let consumoResidencia = Number(prompt ("Digite o consumo de quilowatts da sua residência: "))
  //A.   
    const precoKwh = salarioMinimo / 5 
    console.log("A. O valor de cada quilowatt-hora é de: " + "R$" + precoKwh)

  //B.
    consumoResidencia = 280
    console.log("B. O valor a ser pago é de: " + "R$" + consumoResidencia * precoKwh)

  //C.
    let desconto = 0.85
    console.log("C. O valor a ser pago com desconto pela mesma residência é de: " + "R$" + consumoResidencia * precoKwh * desconto)