// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = []
    let j = 0
    for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido[j] = array[i]
    j++
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arrayOrdenado = []
  const tamanhoArray = array.length
  let indice
  for (let i = 0; i < tamanhoArray; i++) {
    arrayOrdenado[i] = 999999999999
    for (let j = 0; j < tamanhoArray; j++) {
        if (array[j] < arrayOrdenado[i]) {
            arrayOrdenado[i] = array[j]
            indice = j
        }
    }
    array.splice(indice, 1)
  }
  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = []
    for (termo of array) {
        if (termo % 2 == 0) {
            arrayPares.push(termo)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const filtraPares = (termo) => {
        return termo % 2 === 0
    }
    const elevarQuadrado = (termo) => {
        return termo ** 2
    }
    return array.filter(filtraPares).map(elevarQuadrado)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (termo of array) {
        if (termo > maiorNumero) {
            maiorNumero = termo
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if (num1 >= num2) {
        maiorNumero = num1   
        menorNumero = num2  
    } else {
        maiorNumero = num2
        menorNumero = num1 
    }
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero

    const objeto = {
        maiorNumero: maiorNumero ,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor ,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}