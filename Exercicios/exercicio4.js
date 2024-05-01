//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

let notaAvaliacaoUm = 5
let notaAvaliacaoDois = 5
let mediaSemetral = (notaAvaliacaoUm + notaAvaliacaoDois) / 2

console.log(mediaSemetral)
if (mediaSemetral >= 6) {
    console.log("PARABÉNS! Você foi aprovado")
}
