//Exercícios de escrita de código - Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a. Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

 const mapNome = (item, indice, array ) => {
     return item.nome
 }

 const pokemonsOrdem = pokemons.map(mapNome).sort()
 console.log(pokemonsOrdem)

 //b. Crie um novo array apenas com os tipos dos pokémons, sem repetição

 const mapTipo = (item,indice,array) => {
     return item.tipo
 }


 const tiposPokemons = pokemons.map(mapTipo)

 const lista = []
 for (let i = 0; i < tiposPokemons.length; i++) {   
     if (!lista.includes(tiposPokemons[i])) {
         lista.push(tiposPokemons[i])
     }
     
 }
 console.log(lista)