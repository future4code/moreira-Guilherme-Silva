// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b)

/* Deve ser criado um script no arquivo package.json com a seguinte estrutura:

"scripts": {
    "nomeDoScript": "tsc && node ./xercicio-4.js"
  } */

// c)

/* No tsconfig.json a propriedade "rootDir" passaria de "rootDir": "./",   para "rootDir": "./src",     */

// d)

/* Sim, podemos colocar os nomes de todos os arquivos dentro do script separados por espaço */