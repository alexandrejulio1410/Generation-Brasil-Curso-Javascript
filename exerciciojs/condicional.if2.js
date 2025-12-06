//Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando
//se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require('readline-sync');
let numero = leia.questionInt('Digite um numero inteiro: ');

if (numero % 2 == 0) {
    if (numero > 0) {
        console.log(`O número ${numero} é par e positivo`);
                            
    } else {
        console.log(`O número ${numero} é par e negativo`);
                            
    }
} else {
    if (numero > 0) {
        console.log(`O número ${numero} é ímpar e positivo`);
                            
    } else {
        console.log(`O número ${numero} é ímpar e negativo`);
        
    }
}