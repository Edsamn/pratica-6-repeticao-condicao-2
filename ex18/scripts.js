// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let valorTabela = Number(prompt('Digite o valor do produto'));
let parcelas = Number(prompt('Digite o número de parcelas de 1 (à vista) até 15'));

if (parcelas === 1) {
    let valorComDesconto = valorTabela - (valorTabela * 0.025)
    console.log(`O preço total (com desconto à vista) será de: ${valorComDesconto}`)
} else if (parcelas >= 2 && parcelas <= 5) {
    console.log(`O preço total (sem desconto) será de: ${valorTabela}. Cada parcela será de: ${valorTabela / parcelas}`)
} else if (parcelas >= 6 && parcelas <= 10) {
    let valorJuros6 = valorTabela + (valorTabela * 0.06)
    let valorParcela6 = valorJuros6 / parcelas
    console.log(`O preço total (com juros de 6%) será de: ${valorJuros6}. Cada parcela será de: ${valorParcela6}`)
} else if (parcelas >= 11 && parcelas <= 15) {
    let valorJuros13 = valorTabela + (valorTabela * 0.13)
    let valorParcela13 = valorJuros13 / parcelas
    console.log(`O preço total (com juros de 13%) será de: ${valorJuros13}. Cada parcela será de: ${valorParcela13}`)
} else {
    console.log('Número de parcelas inválido')
}