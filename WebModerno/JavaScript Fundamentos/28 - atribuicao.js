// ---- Declaração de Variáveis ----

// 'const' é usado para declarar uma variável cujo valor não pode ser reatribuído após a inicialização.
// 'a' é uma constante e seu valor será sempre 7 durante a execução deste bloco de código.
const a = 7;

// 'let' é usado para declarar variáveis que podem ter seus valores reatribuídos.
// 'b' é inicializada com o valor 3.
let b = 3;

// ---- Operadores de Atribuição ----

// Os operadores de atribuição combinam uma operação aritmética com a atribuição.
// Eles são uma forma mais concisa de escrever certas operações.

// Atribuição de Adição (+=)
// 'b += a' é o mesmo que 'b = b + a'.
// O valor de 'a' (7) é somado ao valor atual de 'b' (3), e o resultado (10) é atribuído de volta a 'b'.

b += a; // b se torna 3 + 7 = 10
console.log(b); // Saída: 10

// Atribuição de Subtração (-=)
// 'b -= 4' é o mesmo que 'b = b - 4'.
// Subtrai 4 do valor atual de 'b' (10), e o resultado (6) é atribuído de volta a 'b'.

b -= 4; // b se torna 10 - 4 = 6
console.log(b); // Saída: 6

// Atribuição de Multiplicação (*=)
// 'b *= 2' é o mesmo que 'b = b * 2'.
// Multiplica o valor atual de 'b' (6) por 2, e o resultado (12) é atribuído de volta a 'b'.

b *= 2; // b se torna 6 * 2 = 12
console.log(b); // Saída: 12

// Atribuição de Divisão (/=)
// 'b /= 2' é o mesmo que 'b = b / 2'.
// Divide o valor atual de 'b' (12) por 2, e o resultado (6) é atribuído de volta a 'b'.

b /= 2; // b se torna 12 / 2 = 6
console.log(b); // Saída: 6

// Atribuição de Módulo (Resto da Divisão) (%=)
// 'b %= 2' é o mesmo que 'b = b % 2'.
// Calcula o resto da divisão do valor atual de 'b' (6) por 2.
// Como 6 é perfeitamente divisível por 2, o resto é 0. Esse resultado (0) é atribuído de volta a 'b'.

b %= 2; // b se torna 6 % 2 = 0
console.log(b); // Saída: 0

// ---- Resumo Didático dos Operadores de Atribuição ----
// Eles são atalhos úteis para modificar o valor de uma variável com base em seu valor atual.
// x += y  =>  x = x + y
// x -= y  =>  x = x - y
// x *= y  =>  x = x * y
// x /= y  =>  x = x / y
// x %= y  =>  x = x % y
