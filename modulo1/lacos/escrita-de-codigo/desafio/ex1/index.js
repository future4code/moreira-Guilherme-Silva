//Exercícios de escrita de código - Desafio 1



const resp = Number(prompt("Digite um número:"))

console.log("Vamos jogar!")

let chute
let i = 0
while (chute !== resp) {
    chute = Number(prompt("Chute um número:"))
    console.log(`O número chutado foi: ${chute}`)
    if (resp > chute) {
        console.log("Errrrrrrrou, é maior")
    } else if (resp < chute) {
        console.log("Errrrrrrrou, é menor")
    } else {
        console.log("Acertou!!")
    }
    i++
}
console.log(`O número de tentativas foi: ${i}`)

