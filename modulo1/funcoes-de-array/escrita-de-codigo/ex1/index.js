//Exercícios de escrita de código - Ex1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a. Crie um novo array que contenha apenas o nome dos doguinhos

 const mapNomes = (item) => {
     return item.nome
 }

 console.log(pets.map(mapNomes))

 //b. Crie um novo array apenas com os cachorros salsicha

 const filtraSalsicha = (item) => {
     return item.raca === "Salsicha"
 }

 console.log(pets.filter(filtraSalsicha))

 //c. Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 const filtraPooddle = (item) => {
    return item.raca === "Poodle"
}

const mapNomeMensagem = (item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
}

console.log(pets.filter(filtraPooddle).map(mapNomeMensagem))