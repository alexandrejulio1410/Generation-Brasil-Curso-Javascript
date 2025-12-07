//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
//A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const leia = require('readline-sync');

let nomeColaborador = leia.question('Digite o nome do colaborador: ');
let codigoCargo = leia.questionInt('Digite o codigo do cargo (1 a 6): ');
let salario = leia.questionFloat('Digite o salario atual: ');

let cargo;
let novoSalario;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        novoSalario = salario * 1.10;  // 10%
        break;
    
    case 2:
        cargo = "Vendedor";
        novoSalario = salario * 1.07;  // 7%
        break;
    
    case 3:
        cargo = "Supervisor";
        novoSalario = salario * 1.09;  // 9%
        break;
    
    case 4:
        cargo = "Motorista";
        novoSalario = salario * 1.06;  // 6%
        break;
    
    case 5:
        cargo = "Estoquista";
        novoSalario = salario * 1.05;  // 5%
        break;
    
    case 6:
        cargo = "Tecnico de TI";
        novoSalario = salario * 1.08;  // 8%
        break;
    
    default:
        console.log("Codigo de cargo invalido!");
}

console.log(`\nNome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: R$ ${novoSalario.toFixed(2)}`);