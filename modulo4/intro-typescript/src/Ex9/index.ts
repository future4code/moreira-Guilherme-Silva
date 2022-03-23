function validaEstudante(idade: number, ensino: boolean, horas: number, horario: string): boolean {

    if(idade >= 18 && ensino && (horas >= 40 && horario === "integral" || horas >= 20 && horario === "noturno")) {
        return true
    } else {
        return false
    }
}
