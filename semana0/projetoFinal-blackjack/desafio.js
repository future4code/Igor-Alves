import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

console.log ("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")){
   let cartaJogador = comprarCarta()
   let cartaComputador = comprarCarta() 
   let naipesJogador = []
   let naipesComputador = [] 
   let pontuacaoJogador = 0
   let pontuacaoComputador = 0
   let cartasTiradas = 0
 


   while (cartasTiradas < 2){
      cartaJogador = comprarCarta()
      cartaComputador = comprarCarta()
      naipesJogador.push(cartaJogador.texto)  
      pontuacaoJogador += cartaJogador.valor
      naipesComputador.push(cartaComputador.texto)
      pontuacaoComputador += cartaComputador.valor

      if(pontuacaoJogador === 22 || pontuacaoComputador === 22){
         cartaJogador = comprarCarta()
         cartaComputador = comprarCarta()
         naipesJogador += cartaJogador.texto 
         pontuacaoJogador += cartaJogador.valor
         naipesComputador += cartaComputador.texto
         pontuacaoComputador += cartaComputador.valor
      }
      cartasTiradas += 1
  }

  while (pontuacaoJogador !== 21){
    if (confirm("Suas cartas são " + naipesJogador[0] + " " + naipesJogador[1] + ". A carta revelada do computador é " + naipesComputador[0] + "." + "\n" + "Deseja comprar mais uma carta? ")){
        cartaJogador = comprarCarta()
        cartaComputador = comprarCarta()
        naipesJogador.push(cartaJogador.texto)  
        pontuacaoJogador += cartaJogador.valor
        naipesComputador.push(cartaComputador.texto)
        pontuacaoComputador += cartaComputador.valor
      } else {
        conlose.log("")
      }
  }


  //  console.log("Usuário - cartas: " + naipesJogador + " - pontuação " + pontuacaoJogador)
  //  console.log("Computador - cartas: " + naipesComputador + " - pontuação " + pontuacaoComputador)

  //  if (pontuacaoJogador > pontuacaoComputador){
  //     console.log("O usuário ganhou!")
  //  } else if (pontuacaoJogador < pontuacaoComputador){
  //     console.log("O computador ganhou!")
  //  } else {
  //     console.log("Empate!")
  //  }

} else{
   console.log("O jogo acabou")
}

