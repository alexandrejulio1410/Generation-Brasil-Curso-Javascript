//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, 
//onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado,
// a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo:

const leia = require('readline-sync');
let vetor = [34, 7, 23, 32, 5, 62, 78, 1, 90, 12];
let numeroProcurado = leia.questionInt('Digite um número para procurar no vetor: ');
let posicao = -1;   

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        posicao = i;
        break;
    }
}   

if (posicao === -1) {
    console.log(`Não foi encontrado!`);
} else {
    console.log(`O número ${numeroProcurado} foi encontrado na posição ${posicao} do vetor.`);                  
}