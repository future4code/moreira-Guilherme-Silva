//Exercícios de escrita de código - Desafio 2

const resp = Math.floor((Math.random() * 10) + 1)
console.log(resp)


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

/* Foi bem fácil realizar a alteração, visto que só foi preciso mudar uma linha com as novas funcionalidades de random. O resto do programa se manteve. */