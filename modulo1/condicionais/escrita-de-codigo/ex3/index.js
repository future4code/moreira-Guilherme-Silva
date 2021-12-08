//Exercícios de escrita de código - Ex3

const turno = prompt("Qual o seu turno?")

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Resposta não reconhecida")
}
