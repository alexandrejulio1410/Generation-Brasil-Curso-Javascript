//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');
let a = (leia.questionInt('Digite o valor de A: '));
let b = (leia.questionInt('Digite o valor de B: '));
let c = (leia.questionInt('Digite o valor de C: '));

let soma = a + b;

if (soma > c) {
    console.log(`A soma de a + b é maior que c`);
} else if (soma < c) {
    console.log(`A soma de a + b é menor que c`);
} else {
    console.log(`A soma de a + b é igual a c`);
}