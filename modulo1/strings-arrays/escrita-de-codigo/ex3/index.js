//Exercícios de escrita de código - Ex3

const listaDeTarefas = []

let tarefa = prompt("Digite a tarefa 1: ")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite a tarefa 2: ")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite a tarefa 3: ")
listaDeTarefas.push(tarefa)

console.log(listaDeTarefas)

const remover = prompt("Digite o índice da tarefa que quer remover (0-2):")
listaDeTarefas.splice(remover,1)

console.log(listaDeTarefas)

