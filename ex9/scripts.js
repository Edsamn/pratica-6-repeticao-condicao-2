// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = Number(prompt('Digite um número'))

if (numero === 2 || numero / 1 != 1 || numero % 2 != 0 || numero % 3 != 0 || numero % 5 != 0) {
    console.log('É primo.')
}