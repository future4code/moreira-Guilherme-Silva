//Exercícios de escrita de código - Ex 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a. Crie um novo array que contenha apenas o nome de cada item

 const mapNomes = (item) => {
     return item.nome
 }

 const prodNomes = produtos.map(mapNomes)
 console.log(prodNomes)

 //b. Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 const mapDesconto = (item) => {
     delete item.categoria
     item.preco *= 0.95
     item.preco = item.preco.toFixed(2)
     return item
 }

 const prodDesconto = produtos.map(mapDesconto)
 console.log(prodDesconto)

 //c. Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const filtraBebidas = (item) => {
     return item.categoria === "Bebidas"
 }

 const prodBebidas = produtos.filter(filtraBebidas) 
 console.log(prodBebidas)

 //d. Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

 const filtraYpe = (item) => {
    return item.nome.includes("Ypê")
}

const prodYpe = produtos.filter(filtraYpe) 
console.log(prodYpe)

//e. Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const mapImprime = (item) => {
    return `Compre ${item.nome} por R$${item.preco}`
}

const mensagem = produtos.filter(filtraYpe).map(mapImprime)

console.log(mensagem)