//Exercícios de escrita de código - Ex2

const lista = ["strogonoff", "risoto", "milkshake", "cachorro quente", "sorvete"]

console.log(lista)
console.log(`essas são as minhas comidas preferidas:`)
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista[3])
console.log(lista[4])

const comida = prompt("Digite sua comida predileta:")

lista[1] = comida
console.log(lista)