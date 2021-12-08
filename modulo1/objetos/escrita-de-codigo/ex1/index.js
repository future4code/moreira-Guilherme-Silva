//Exercícios de escrita de código - Ex1

//a. Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Guilherme" ,
    apelidos: ["Gui", "Cruz", "MMs"]
}

const imprimir = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimir(pessoa)

//b. Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoa = {
    ... pessoa ,
    apelidos: ["Guiga", "Guigui", "Cruzinho"]
}

imprimir(novaPessoa)