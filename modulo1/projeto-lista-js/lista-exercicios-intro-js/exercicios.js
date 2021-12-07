// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo:"))
  const largura = Number(prompt("Digite a largura do retângulo:"))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu:"))

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura**2)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite o seu nome:")
  const idade = Number(prompt("Digite o ano em que você nasceu:"))
  const email = prompt("Digite o seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cores = []
  cores.push(prompt("Cor 1:"), prompt("Cor 2:"), prompt("Cor 3:"))

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const  troca = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = troca

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()

  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu:"))
  const anoEmissao = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida:"))

  const idade = anoAtual - anoNascimento
  const tempo = anoAtual - anoEmissao

  const condicao1 = idade <= 20 && tempo >= 5
  const condicao2 = idade > 20 && idade <= 50 && tempo >= 10
  const condicao3 = idade > 20 && tempo >= 15

  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0  
  const condicao3 = !(ano % 100 === 0 && ano % 400 !== 0)

  return condicao1 || (condicao2 && condicao3)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Tem mais de 18 anos?:")
  const ensino = prompt("Tem ensino médio completo?:")
  const disponibilidade = prompt("Tem disponibilidade de horários?:")

console.log(idade == "sim" && ensino === "sim" && disponibilidade === "sim")
}