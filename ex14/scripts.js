// Leia um número, utilizando WHILE multiplique este número por 3 
// enquanto a soma seja menor que 500 e no final mostre qual o último valor

let numero = Number(prompt("Digite um número."));
let soma = 0;

while(numero < 500) {
    numero = numero * 3;
    if(numero < 500) {
        soma = numero;
    }
}

console.log(soma)