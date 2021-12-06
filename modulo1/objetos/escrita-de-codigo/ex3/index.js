//Exercícios de escrita de código - Ex3

//a. Crie uma variável de escopo global que guarde um array vazio chamada carrinho
const carrinho = []

//b. Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "banana" ,
    disponibilidade: true 
}

const fruta2 = {
    nome: "maça" ,
    disponibilidade: false 
}

const fruta3 = {
    nome: "uva" ,
    disponibilidade: true 
}

//c. Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

const colocarCarrinho = (objeto) => {
    carrinho.push(objeto)
}

colocarCarrinho(fruta1)
colocarCarrinho(fruta2)
colocarCarrinho(fruta3)

//d. Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.   

console.log(carrinho)