// Ex 2

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
let resultado = 0

switch(operacao){
	case "soma":
        resultado = num1 + num2
		break;
	case "subt":
		resultado = num1 - num2
		break;
    case "multi":
		resultado = num1 * num2
		break;
    case "div":
        resultado = num1 / num2
        break;
}

console.log(`Resposta: ${resultado}`)