//Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
//Todos os elementos da Diagonal Principal
//Todos os elementos da Diagonal Secundária
//A Soma de todos os elementos da Diagonal Principal
//A Soma de todos os elementos da Diagonal Secundária

const leia = require('readline-sync');

let matriz = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(leia.questionInt('Digite um numero: '));
    }
    matriz.push(linha);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            somaDiagonalPrincipal += matriz[i][j];
        }
        if (i + j === 2) {
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
}   

console.log(`\nDiagonal Principal: ${matriz[0][0]} ${matriz[1][1]} ${matriz[2][2]}`);
console.log(`Diagonal Secundária: ${matriz[0][2]} ${matriz[1][1]} ${matriz[2][0]}`);
console.log(`Soma da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${somaDiagonalSecundaria}`);
