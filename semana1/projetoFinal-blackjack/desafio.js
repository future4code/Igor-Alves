import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

console.log ("Bem vindo ao jogo de Blackjack!")

let querJogar = confirm("Quer iniciar uma nova rodada?")

if (querJogar){
  const cartaJogador = [comprarCarta(), comprarCarta()]
  const cartaComputador = [comprarCarta(), comprarCarta()] 
  let naipesJogador = [cartaJogador[0].texto + " " + cartaJogador[1].texto]
  let naipesComputador = [cartaComputador[0].texto + " " + cartaComputador[1].texto]
  let pontuacaoJogador = 0
  let pontuacaoComputador = 0
  let querMais = confirm("Suas cartas são " + naipesJogador + ". A carta revelada do computador é " + naipesComputador + ". Deseja comprar mais uma carta?")

  while (querMais) {
    const novaCarta = comprarCarta()

    cartaJogador.push(novaCarta)

    pontuacaoJogador = 0

    for (let carta of cartaJogador) {
      pontuacaoJogador += carta.valor
    }

    if (pontuacaoJogador < 21) {
      naipesJogador = ""

      for (let carta of cartaJogador) {
        naipesJogador += " " + carta.texto
      }
    
      querMais = confirm("Suas cartas são" + naipesJogador + ". A carta revelada do computador é " + naipesComputador + ". Deseja comprar mais uma carta?")

    } else {
      querMais = false
    }
    
  } 

    pontuacaoJogador = 0

    for (let carta of cartaJogador) {
      pontuacaoJogador += carta.valor
    }

    for (let carta of cartaComputador) {
      pontuacaoComputador += carta.valor
    }

    let computadorCompraOutra = pontuacaoJogador <= 21 && pontuacaoComputador <= pontuacaoJogador

    while (computadorCompraOutra) {
      const novaCarta = comprarCarta()

      cartaComputador.push(novaCarta)

      pontuacaoComputador = 0

      for (let carta of cartaComputador){
        pontuacaoComputador += carta.valor
      }

      computadorCompraOutra = pontuacaoJogador <= 21 && pontuacaoComputador <= pontuacaoJogador
    }

    let resultado

    if (pontuacaoJogador > 21) {
      resultado = "O computador ganhou!"
    } else if (pontuacaoComputador > 21){
      resultado = "O usuário ganhou!"
    } else if (pontuacaoComputador > pontuacaoJogador){
      resultado = "O computador ganhou!"
    } else if (pontuacaoComputador < pontuacaoJogador){
      resultado = "O usuário ganhou!"
    } else {
      resultado = "Empate!"
    }

    naipesJogador = ""
    naipesComputador = ""

    for (let carta of cartaJogador){
      naipesJogador += " " + carta.texto
    }
    
    for(let carta of cartaComputador){
      naipesComputador += " " + carta.texto
    }

    alert("Suas cartas são" + naipesJogador + ". Sua pontuação é " + pontuacaoJogador + ". As cartas do computador são" + naipesComputador + ". A pontuação do computador é " + pontuacaoComputador + ". " + resultado)
  } else {
    console.log("O jogo acabou!")
  }