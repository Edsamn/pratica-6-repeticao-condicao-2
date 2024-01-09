// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

let doador = Number(prompt('Digite sua idade'));

if (doador >= 18 && doador <= 67) {
    console.log('Pode doar')
} else {
    console.log('Não pode doar')
}