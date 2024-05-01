//11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

let valoresInteiros = [5, 2, 25, 20, -10, 40]

for (let numero of valoresInteiros) {

    if (numero == null || numero < 0) {
        break
    }
    if (numero % 2 === 0) {
        console.log(`${numero} é PAR`)
    }
    else if (numero % 2 !== 0) {
        console.log(`${numero} é ÍMPAR`)
    }
}
