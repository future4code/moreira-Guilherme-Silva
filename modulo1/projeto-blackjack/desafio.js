
// ----------------  Funções auxiliares  ----------------

// Função que sorteia as duas cartas iniciais
const sorteioCartas = () => { 
   return [comprarCarta(), comprarCarta()]
}
// Função que calcula a pontuação inicial depois de receber as 2 cartas
const calculoPontuacao = (cartas) => {
   return cartas[0].valor + cartas[1].valor
}
// Função que cria um array apenas com os textos das cartas ao receber as cartas
const mapTexto = (objeto) =>{
   return objeto.texto
}
// Acrescimo de carta nos arrays ao receber o array com as cartas e o array com os textos das cartas
const acrescimoCarta = (cartaJogador, cartaJogadorTexto) => {
   cartaJogador.push(comprarCarta())
   let tamanho = cartaJogador.length
   cartaJogadorTexto.push(cartaJogador[tamanho - 1].texto)
}
// Acrescimo de pontos na pontuação ao receber o array com as cartas e a pontuação atual
const acrescimoPonto = (cartaJogador, pontuacaoJogador) => {
   let tamanho = cartaJogador.length
   pontuacaoJogador += cartaJogador[tamanho - 1].valor
   return pontuacaoJogador
}
// ----------------  Programa  ----------------

// Solicitação de início de jogo
if (confirm("Bem-vindo(a) ao jogo de blackjack." + 
            "\n" +
            "Quer iniciar uma nova rodada?")) {
   // Sorteio das 2 cartas do usuário
   const cartaUsuario = sorteioCartas() // chamada da função que sorteia cartas
   // Sorteio das 2 cartas do computador
   const cartaComputador = sorteioCartas() // chamada da função que sorteia cartas
   
   // Verificação se as duas cartas iniciais do usuário são dois ases (A), sorteando novamente caso seja. 
   while (cartaUsuario[0].texto.includes("A") && cartaUsuario[1].texto.includes("A")) {
      cartaUsuario = sorteioCartas()
   }
  // Verificação se as duas cartas iniciais do computador são dois ases (A), sorteando novamente caso seja. 
   while (cartaComputador[0].texto.includes("A") && cartaComputador[1].texto.includes("A")) {
   cartaComputador = sorteioCartas()
   }
   // Cálculo da pontuação inicial dos jogadores
   let pontuacaoUsuario = calculoPontuacao(cartaUsuario) // chamada da função que calcula a pontuação
   let pontuacaoComputador = calculoPontuacao(cartaComputador) // chamada da função que calcula a pontuação
   
   // Criação de array com texto das cartas iniciais do usuário para facilitar a impressão
   const cartaUsuarioTexto = cartaUsuario.map(mapTexto)
   // Criação de array com texto das cartas iniciais do computador para facilitar a impressão
   const cartaComputadorTexto = cartaComputador.map(mapTexto)
 
   // impressão das cartas iniciais e solicitação de compra até passar 21 ou o usuário cancelar
   for (let i = 1; (i < cartaUsuario.length) && (pontuacaoUsuario <= 21); i++) {       
      if (confirm(`Suas cartas são ${cartaUsuarioTexto.join(" ")}. A carta revelada do computador é ${cartaComputador[0].texto}.` +
                  "\n" +
                  "Deseja comprar mais uma carta?")) {
         // Puxar mais uma carta e somar a nova pontuação
         acrescimoCarta(cartaUsuario, cartaUsuarioTexto) // chamada da função que acresenta a nova carta aos arrays
         pontuacaoUsuario = acrescimoPonto(cartaUsuario, pontuacaoUsuario) // chamada da função que soma a nova pontuação
      }
   }
   // Variável auxiliar para armazenar o texto do ganhador
   let frase

   // Verificação se o usuário não estourou
   if (pontuacaoUsuario <= 21) {
      // Compras do computador até igualar ou passar o jogador
      while (pontuacaoUsuario > pontuacaoComputador) {
         acrescimoCarta(cartaComputador, cartaComputadorTexto) // chamada da função que acresenta a nova carta aos arrays
         pontuacaoComputador = acrescimoPonto(cartaComputador, pontuacaoComputador) //chamada da função que soma a nova pontuação
      }
      // Verificação se o computador estourou e quem ficou com a maior pontuação
      if (pontuacaoComputador > 21) {
         frase = "O usuário ganhou!" 
      } else if (pontuacaoUsuario > pontuacaoComputador) {
         frase = "O usuário ganhou!"
      } else if (pontuacaoUsuario < pontuacaoComputador) {
         frase = "O computador ganhou!"
      } else {
         frase = "Empate!"
      }
   // Caso em que o usuário estourou (o computador nem precisa comprar)
   } else {
      frase = "O computador ganhou!"
   }
   
   // Exibição dos resultados e ganhador
   alert(`Usuário - cartas: ${cartaUsuarioTexto.join(" ")}  - pontuação ${pontuacaoUsuario}` +
         "\n" +
         `Computador - cartas: ${cartaComputadorTexto.join(" ")}  - pontuação ${pontuacaoComputador}` +
         "\n" +
         frase)
   
   // Caso o usuário não queira jogar
}  else {
   alert("O jogo acabou.")
}