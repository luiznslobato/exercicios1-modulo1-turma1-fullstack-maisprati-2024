//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let macasCompradas = 12
let valorTotal = 0

if (macasCompradas < 12) {
    valorTotal = macasCompradas * (0.30)
} else {
    valorTotal = macasCompradas * (0.25)
}
console.log('R$' + valorTotal)