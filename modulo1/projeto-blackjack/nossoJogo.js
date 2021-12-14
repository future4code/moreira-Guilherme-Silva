// ----------------  Funções auxiliares  ----------------

// Função que sorteia as duas cartas
const sorteioCartas = () => { 
   return [comprarCarta(), comprarCarta()]
}
// Função que calcula a pontuação depois de receber as cartas
const calculoPontuacao = (cartas) => {
   return cartas[0].valor + cartas[1].valor
}
// Função que imprime os resultados ao receber o nome do jogador, suas cartas e sua pontuação
const imprimir = (jogador, cartas, pontuacao) => {
   //console.log(`${jogador} - cartas: ${cartas[0].texto} ${cartas[1].texto}  - pontuação ${pontuacao}`)  
   console.log(`${jogador} - cartas: ${cartas[0].texto} ${cartas[1].texto}  - pontuação ${pontuacao}`) 
}
// Função que verifica e imprime o ganhador ao receber a pontuação dos dois jogadores
const imprimirGanhador = (pontuacaoUsuario, pontuacaoComputador) => {
   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }   
}
// ----------------  Programa  ----------------

// Mensagem de Boas Vindas
console.log("Bem-vindo(a) ao jogo de blackjack")

// Solicitação de início de jogo
if (confirm("Quer iniciar uma nova rodada?")) { // Código do programa
   // Sorteio das cartas do usuário
   const cartaUsuario = sorteioCartas() // chamada da função que sorteia cartas
   // Sorteio das cartas do computador
   const cartaComputador = sorteioCartas() // chamada da função que sorteia cartas

   // Cálculo da pontuação do usuário
   const pontuacaoUsuario = calculoPontuacao(cartaUsuario) // chamada da função que calcula a pontuação
   // Cálculo da pontuação do computador
   const pontuacaoComputador = calculoPontuacao(cartaComputador) // chamada da função que calcula a pontuação

   // Impressão das cartas e da pontuação do usuário
   imprimir("Usuário", cartaUsuario, pontuacaoUsuario) // chamada da função que imprime os resultados
   // Impressão das cartas e da pontuação do computador
   imprimir("Computador", cartaComputador, pontuacaoComputador) // chamada da função que imprime os resultados

   // Verificação do ganhador
   imprimirGanhador(pontuacaoUsuario, pontuacaoComputador)

   // Caso o usuário não queira jogar
}  else {
   console.log("O jogo acabou")
}