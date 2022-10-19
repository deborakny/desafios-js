/*
Dadas as variáveis

d1, d2, sorteio1, sorteio2, resultado e mensagem

Onde sorteio1 e sorteio2, individualmente, devem receber um número aleatório
entre 1 e 6

Desafio: Escrever um programa que imprima os seguintes resultados dentro de um
loop de (6) seis interações

1. A soma dos números aleatórios atribuídos a d1 e d2
2. O resultado se a soma é par ou ímpar
3. O valor acumulado das vezes que o resultado retornou par
4. Se o valor de vezes do resultado é maior igual a 4 escreva
na mensagem: "você ganhou"
5. Caso contrário escreva na mensagem: "Não foi dessa vez"
*/

let d1,d2,sorteio1,sorteio2,mensagem,soma,vAcumulado=0;

function sorteio(){
    sorteio1=Math.floor(Math.random()*6)+1;
    sorteio2=Math.floor(Math.random()*6)+1;
    d1=sorteio1;
    d2=sorteio2;
    soma = d1 + d2;
    soma % 2 == 0 ? mensagem="PAR" : mensagem="ÍMPAR"
    mensagem == "PAR" ? vAcumulado++ : null
    return "sorteio1 = "+sorteio1+" e sorteio2 = "+sorteio2
    +"\nsoma = "+d1+" + "+d2+" = "+soma
    +"\nO número sorteado é "+mensagem
    +"\nValor acumulado de resultados pares: "+vAcumulado;
}
for(var i=0;i<6;i++){
    console.log(sorteio());
}
vAcumulado>=4 ? mensagem="\nVocê ganhou!" : mensagem="\nNão foi dessa vez :(";
console.log(mensagem);
