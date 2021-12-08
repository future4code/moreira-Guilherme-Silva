//Exercícios de escrita de código - Ex4

const genero = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco <= 15) {
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme")
}