function reverse (text: string): void {
    let i: number
    const tam: number = text.length
    let reverseText: string[] = new Array(tam)
    for(i = 0; i < tam; i++) {
        reverseText[tam - i - 1] = text[i]        
    }
    console.log(reverseText)
}