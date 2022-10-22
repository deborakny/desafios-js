/*
Dadas as variáveis

numDaSorte, mensagem

Onde numDaSorte é um número aleatório resultado de uma chamada de uma função
que parametriza outro número que tem como objetivo ser o mesmo do número 
sorteado

Desafio:

1. Escrever um programa que execute um número aleatório uma única vez
2. Chamar a função por intermédio do console do navegador, passando um
número de palpite do número sorteado

3. Escrever 3 alternativas para mensagem:
a."Tente um número menor"
b."Tente um número maior"
c."Você acertou"

4. O limite de tentativas é 6. Quando as tentativas se esgotarem,
escreva na mensagem:
"Não foi dessa vez"

Dica: Para testar o desafio no console, não recarregue a página! Apenas
pressione enter após escrever a chamada da função
*/

let numDaSorte, mensagem, acumula=1;

function sorteiaNumero(){
    numDaSorte=parseInt(Math.random()*100)+1;
    console.log("Numero " + numDaSorte)
    return numDaSorte;
}
console.log(sorteiaNumero());

function palpite(n){
    if(acumula<6){
        if(n<numDaSorte){
            mensagem="Tente um número maior"
        }
        else if(n>numDaSorte){
            mensagem="Tente um número menor"
        }
        else{   //if(n==sorteiaNumero()){
            mensagem="Você acertou" 
        }         
    }
    else if(n==numDaSorte && acumula===6){
        mensagem="Você acertou"
    }
    else{
        mensagem = "Não foi dessa vez"
    }   
    acumula++;     
    return mensagem;    
}
