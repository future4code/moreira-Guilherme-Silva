//Exercícios de escrita de código - Desafio 2

const nome = prompt("Nome completo:")
let tipo = prompt("Tipo de jogo:")
let etapa = prompt("Etapa do jogo:")
const categoria = Number(prompt("Categoria:"))
const quantidade = Number(prompt("Quantidade de ingressos:"))

let preco
let valor


if (etapa === "SF") {
    etapa = "Semi Final"
    if (categoria === 1) {
        preco = 1320
    } else if (categoria === 2) {
        preco = 880
    } else if (categoria === 3) {
        preco = 550
    } else if (categoria === 4) {
        preco = 220
    }
} else if (etapa === "DT") {
    etapa = "Decisão do 3° lugar"
    if (categoria === 1) {
        preco = 660
    } else if (categoria === 2) {
        preco = 440
    } else if (categoria === 3) {
        preco = 330
    } else if (categoria === 4) {
        preco = 170
    }
} else if (etapa === "FI") {
    etapa = "Final"
    if (categoria === 1) {
        preco = 1980
    } else if (categoria === 2) {
        preco = 1320
    } else if (categoria === 3) {
        preco = 880
    } else if (categoria === 4) {
        preco = 330
    }
}
console.log("---Dados da compra--- ")
console.log(`Nome do cliente: ${nome}`)
console.log(`Tipo do jogo: ${tipo}`)
console.log(`Etapa do jogo: ${etapa}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingressos: ${quantidade} ingressos`)
console.log("")
console.log("---Valores--- ")


if (tipo === "IN") {
    tipo = "Internacional"
    preco = preco /4.10
    valor = quantidade * preco
    console.log(`Valor do ingresso: U$${preco}`)
    console.log(`Valor total: U$${valor}`)
} else if (tipo === "DO") {
    tipo = "Nacional"
    valor = quantidade * preco
    console.log(`Valor do ingresso: R$${preco}`)
    console.log(`Valor total: R$${valor}`)
}



