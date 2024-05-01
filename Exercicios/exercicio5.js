//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ 
//caso a média calculada seja menor que 6,0

let notaAvaliacaoUm = 5
let notaAvaliacaoDois = 5
let mediaSemetral = (notaAvaliacaoUm + notaAvaliacaoDois) / 2

console.log(mediaSemetral)
if (mediaSemetral >= 6) {
    console.log("PARABÉNS! Você foi aprovado")
}
else {
    console.log("REPROVADO! Estude mais")
}