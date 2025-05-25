// Introdução:
// Este código demonstra o uso dos operadores unários (++ e --), operadores de comparação e operadores aritméticos em JavaScript.
// Também inclui exemplos com exponenciação (**), módulo (%) e operadores comuns como soma, subtração, multiplicação e divisão.

// Operadores de incremento e decremento
let num1 = 1;
let num2 = 2;

// Incremento pós-fixado (adiciona 1 após a linha ser executada)
num1++;
console.log(num1); // Saída: 2

// Decremento prefixado (subtrai 1 antes da linha ser executada)
--num1;
console.log(num1); // Saída: 1

// Comparação com incremento prefixado e decremento pós-fixado
console.log(++num1 === num2--);
// ++num1 incrementa antes, então num1 vira 2
// num2-- compara antes de diminuir, então compara com num2 = 2 e depois num2 vira 1
// Resultado da comparação: true

console.log(num1 === num2);
// Agora compara num1 (2) com num2 (1)
// Resultado: false

// ----------------------------------------
// Operadores Aritméticos adicionais:

const a = 3;
const b = 5;

// Soma
const soma = a + b;
console.log("Soma:", soma); // 8

// Subtração
const subtracao = b - a;
console.log("Subtração:", subtracao); // 2

// Multiplicação
const multiplicacao = a * b;
console.log("Multiplicação:", multiplicacao); // 15

// Divisão
const divisao = b / a;
console.log("Divisão:", divisao); // 1.666...

// Módulo (resto da divisão)
const modulo = b % a;
console.log("Módulo:", modulo); // 2 (5 dividido por 3 sobra 2)

// Exponenciação
const exponenciacao = a ** b;
console.log("Exponenciação:", exponenciacao); // 3 elevado a 5 = 243

// ----------------------------------------
// Operadores de atribuição combinados:

let valor = 10;

// Soma e atribuição
valor += 5; // valor = valor + 5
console.log("Soma e atribuição:", valor); // 15

// Subtração e atribuição
valor -= 3; // valor = valor - 3
console.log("Subtração e atribuição:", valor); // 12

// Multiplicação e atribuição
valor *= 2; // valor = valor * 2
console.log("Multiplicação e atribuição:", valor); // 24

// Divisão e atribuição
valor /= 4; // valor = valor / 4
console.log("Divisão e atribuição:", valor); // 6

// Módulo e atribuição
valor %= 5; // valor = valor % 5
console.log("Módulo e atribuição:", valor); // 1

// Exponenciação e atribuição
valor **= 3; // valor = valor ** 3
console.log("Exponenciação e atribuição:", valor); // 1 (1 elevado a 3)

// ----------------------------------------

// Notas finais:
// - ++ e -- podem ser usados antes (prefixo) ou depois (pós-fixo) da variável, alterando quando a alteração ocorre.
// - Operadores como +, -, *, /, %, ** são fundamentais para cálculos matemáticos.
// - Operadores de atribuição combinados (+=, -=, *=, etc.) são atalhos úteis para operações rápidas sobre uma variável.
// - Entender a ordem de execução dos incrementos e decrementos é essencial para evitar bugs em lógicas mais complexas.
