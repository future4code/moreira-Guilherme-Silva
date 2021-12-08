//Exercícios de escrita de código - Desafio 1

const minhaFuncao = () => {
    const nome = prompt("Qual o seu nome?")
    const idade = Number(prompt("Qual a sua idade?"))
    const profissao = prompt("Qual a sua profissão?")

    const objeto = {
        nome: nome,
        idade: idade,
        profissão: profissao
    }

    console.log(objeto)
    console.log(typeof objeto)
}

minhaFuncao()