//Exercícios de escrita de código - Desafio 1

const genero = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco <= 15) {
    const lanche = prompt("Qual lanche será comprado?")
    console.log(`Bom filme!`)
    console.log(`Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme")
}