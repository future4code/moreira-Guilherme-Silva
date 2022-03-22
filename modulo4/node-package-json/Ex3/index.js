// Ex 3

const tarefas = [
	"Lavar a louça",
	"Comprar Leite"
]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)

console.log(tarefas)