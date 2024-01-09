// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let numero = Number(prompt("Digite um número"));

if (numero == 1) {
  document.write("Domingo");
} else if (numero == 2) {
  document.write("Segunda");
} else if (numero == 3) {
  document.write("Terça");
} else if (numero == 4) {
  document.write("Quarta");
} else if (numero == 5) {
  document.write("Quinta");
} else if (numero == 6) {
  document.write("Sexta");
} else if (numero == 7) {
  document.write("Sábado");
} else {
  document.write("Dia Inválido");
}
