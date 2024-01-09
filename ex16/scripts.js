// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = Number(prompt('Digite o ano atual'));
let anoNascimento = Number(prompt('Digite o ano de nascimento'));
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log('Pode votar')
} else {
    console.log('Não pode votar')
}