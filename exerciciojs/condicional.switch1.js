//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
//A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require('readline-sync');
let codigo = leia.questionInt('Digite o codigo do item (1 a 6): ');
let quantidade = leia.questionInt('Digite a quantidade comprada: ');

let produto;
let preco;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    
    default:
        console.log("Codigo invalido!");
}

let valorTotal = quantidade * preco;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);