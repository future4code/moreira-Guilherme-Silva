//Exercícios de escrita de código - Desafio 2

const filme1 = {
    ano:  1995,
    nome: "Toy Story"
}
 const filme2 = {
     ano: 2001,
     nome: "Spider Man"
 }

 const minhaFuncao = (objeto1, objeto2) => {
     let comparacao = objeto1.ano < objeto2.ano
     console.log(`O primeiro filme foi lançado antes do segundo? ${comparacao}`)
     comparacao = objeto1.ano === objeto2.ano
     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparacao}`)
 }

 minhaFuncao(filme1, filme2)