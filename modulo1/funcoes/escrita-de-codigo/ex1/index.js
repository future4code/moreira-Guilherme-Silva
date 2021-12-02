//Exercícios de escrita de código - Ex1

//a.
function sobreMimA () {
    console.log("Eu sou Guilherme, tenho 27 anos, moro em São Paulo e sou engenheiro civil.")
}

sobreMimA()

//b.
function sobreMimB (nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(sobreMimB("João", 30, "Salvador", "estudante"))