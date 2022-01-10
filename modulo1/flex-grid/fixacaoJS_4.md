~~~javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let cont = 0
  for (num of arrayDeNumeros) {
    if (num === numeroEscolhido){
      cont += 1
    }
  }
  if (cont > 0) {
    return `O número ${numeroEscolhido} aparece ${cont}x`
  } else {
    return "Número não encontrado"
  }
}
~~~