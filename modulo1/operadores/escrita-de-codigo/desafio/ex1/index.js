//Exercícios de escrita de código - Desafio 1

let k = (77 - 32)*(5/9) + 273.15
console.log("a.", k, "K")

let f = 80*(9/5) + 32
console.log("b.", f, "°F")

f = 30*(9/5) + 32
k = (f - 32)*(5/9) + 273.15
console.log("c.", f, "°F", k, "K")

const c = Number(prompt("Digite a temperatura em °C:"))
f = c*(9/5) + 32
k = (f - 32)*(5/9) + 273.15
console.log("d.", f, "°F", k, "K")


