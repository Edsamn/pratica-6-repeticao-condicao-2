// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let eleitores = Number(prompt('Digite quantos eleitores são esperados'));
let votosNulos = Number(prompt('Digite quantos votos foram nulos'));
let votosBrancos = Number(prompt('Digite quantos votos foram em branco'));
let votosValidos = Number(prompt('Digite quantos votos foram válidos'));
let totalEleitores = votosNulos + votosBrancos + votosValidos;
let faltantes = eleitores - totalEleitores;
let percentualNulos = (votosNulos * 100) / eleitores;
let percentualBrancos = (votosBrancos * 100) / eleitores;
let percentualValidos = (votosValidos * 100) / eleitores;
let percentualFaltantes = (faltantes * 100) / eleitores

if (totalEleitores > eleitores) {
    console.log('Ocorreu um erro no sistema')
} else {
    console.log(`Total de eleitores: ${totalEleitores}`);
    console.log(`Percentual de votos nulos: ${percentualNulos}`);
    console.log(`Percentual de votos válidos: ${percentualValidos}`);
    console.log(`Percentual de votos brancos: ${percentualBrancos}`);
    console.log(`Percentual de pessoas que não votaram: ${percentualFaltantes}`);
}


