//8. Escreva um algoritmo para ler 2 valores 
//(considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let valorUm = 140
let valorDois = 20
let menorValor;
let maiorValor;

if (valorUm < valorDois) {
    menorValor = valorUm
    maiorValor = valorDois

} else {
    menorValor = valorDois
    maiorValor = valorUm
}
console.log(menorValor, maiorValor)