// Aqui estamos utilizando a técnica de destructuring, que permite extrair valores de um array diretamente para variáveis individuais.
const [a, b, c, d] = [3, 5, 1, 15];

// Agora vamos realizar várias operações matemáticas com essas quatro variáveis.

// SOMA: simplesmente somamos todos os valores.
const soma = a + b + c + d; 
// 3 + 5 + 1 + 15 = 24

// SUBTRAÇÃO: fazemos as subtrações na sequência da esquerda para a direita.
const subtracao = a - b - c - d; 
// (((3 - 5) - 1) - 15) = -18

// DIVISÃO: as divisões também seguem a ordem da esquerda para a direita.
const divisao = a / b / c / d; 
// (((3 / 5) / 1) / 15) = 0.04
// Primeiro 3 dividido por 5 = 0.6
// Depois 0.6 dividido por 1 = 0.6
// Depois 0.6 dividido por 15 = 0.04

// MULTIPLICAÇÃO: multiplicamos todos os valores entre si.
const multiplicacao = a * b * c * d; 
// 3 * 5 * 1 * 15 = 225

// MÓDULO (%): o módulo retorna o resto da divisão, e também segue a ordem da esquerda para a direita.
const modulo = a % b % c % d;
// Primeiro 3 % 5 = 3 (pois 3 dividido por 5 sobra 3)
// Depois 3 % 1 = 0 (qualquer número dividido por 1 sobra 0)
// Depois 0 % 15 = 0 (0 dividido por qualquer número continua sendo 0)

// Por fim, exibimos todos os resultados no console.
console.log(soma, subtracao, divisao, multiplicacao, modulo);
// Saída: 24 -18 0.04 225 0
