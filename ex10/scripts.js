// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let sexo = prompt('Digite o seu sexo: h/m');
let homem = 'h';
let mulher = 'm';
let altura = Number(prompt('Digite sua altura'));

if (sexo === 'h') {
    let pesoIdealHomem = (72.7 * altura) - 58;
    console.log(`Seu peso ideal é: ${pesoIdealHomem}`)
} else {
    let pesoIdealMulher = (62.1 * altura) - 44.7;
    console.log(`Seu peso ideal é: ${pesoIdealMulher}`)
}