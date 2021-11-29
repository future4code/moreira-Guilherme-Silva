//Exercícios de escrita de código - Ex1

let nome
let idade

console.log (typeof nome, typeof idade)
// o tipo das duas variáveis é undefined pois não foi atribuida nenhum valor à elas

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log (typeof nome, typeof idade)
// Dessa vez, o tipo das duas variáveis é string pois por padrão tudo que vem de um prompt é considerado string

console.log("Olá", nome, ",você tem", idade, "anos")