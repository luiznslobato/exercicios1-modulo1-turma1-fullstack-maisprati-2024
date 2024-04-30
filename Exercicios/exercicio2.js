//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

let totais = 200
let brancos = 10
let nulos = 20
let validos = 160

let percentualBrancos = (brancos / totais) * 100
let percentualNulos = (nulos / totais) * 100
let percentualValidos = (validos / totais) * 100

console.log(percentualBrancos)
console.log(percentualNulos)
console.log(percentualValidos)