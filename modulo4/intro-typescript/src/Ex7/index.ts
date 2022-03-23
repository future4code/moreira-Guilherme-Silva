function dnaToRna (dna: string): void {
    let i: number
    let rna: string[] = []
    for(i = 0; i< dna.length; i++) {
        if(dna[i] === "A") {
            rna[i] = "U"
        } else if(dna[i] === "T") {
            rna[i] = "A"
        } else if(dna[i] === "G") {
            rna[i] = "C"
        } else if(dna[i] === "C") {
            rna[i] = "G"
        }
        console.log(rna[i])
    }
}