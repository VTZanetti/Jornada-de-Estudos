// ---- Função com Desestruturação de Array nos Parâmetros ----
// A função 'rand' é definida para aceitar um array como argumento.
// A mágica acontece na assinatura: `function rand([min = 0, max = 1000])`
// Isso é a desestruturação de array aplicada aos parâmetros:
// - A função espera que o primeiro argumento seja um array.
// - 'min' receberá o valor do primeiro elemento (índice 0) do array. Se o array não tiver
//   um primeiro elemento, ou se ele for `undefined`, 'min' assume o valor padrão 0.
// - 'max' receberá o valor do segundo elemento (índice 1) do array. Se o array não tiver
//   um segundo elemento, ou se ele for `undefined`, 'max' assume o valor padrão 1000.

function rand([min = 0, max = 1000]) {
    // ---- Garantindo a Ordem Correta de min e max ----
    // Esta linha verifica se o valor de 'min' (após a desestruturação e aplicação de padrões)
    // é maior que o valor de 'max'. Isso pode acontecer se o array for passado com os
    // valores invertidos, por exemplo, [50, 40].
    // Se 'min' for de fato maior que 'max', os valores das duas variáveis são trocados.
    // A expressão `[min, max] = [max, min]` é uma forma concisa de realizar essa troca
    // usando a desestruturação e atribuição em array.
    if (min > max) [min, max] = [max, min];

    // ---- Geração do Valor Aleatório ----
    // Esta parte é similar à função anterior que usava desestruturação de objeto.
    // 1. Math.random(): Gera um número decimal entre 0 (inclusivo) e 1 (exclusivo).
    // 2. (max - min): Calcula a amplitude do intervalo (já corrigido pela lógica de inversão).
    // 3. Math.random() * (max - min): Escala o número aleatório para o tamanho da amplitude.
    // 4. ... + min: Desloca o intervalo para que comece em 'min'.
    // O resultado é um número decimal no intervalo [min, max).
    const valor = Math.random() * (max - min) + min;

    // Math.floor(): Arredonda o 'valor' para o número inteiro mais próximo, para baixo.
    // O resultado final será um inteiro no intervalo [min, max - 1].
    return Math.floor(valor);
}

// ---- Demonstração da Utilização da Função 'rand' ----

// Chamada com um array onde o primeiro elemento (min) é maior que o segundo (max).
// - Desestruturação inicial: min = 50, max = 40.
// - Condição `if (min > max)` (50 > 40) é verdadeira.
// - Troca de valores: min se torna 40, max se torna 50.
// - Resultado: um número aleatório inteiro entre 40 (inclusive) e 49 (inclusive).
console.log(rand([50, 40]));

// Chamada com um array contendo apenas um elemento.
// - Desestruturação: min = 992.
// - Como não há segundo elemento, 'max' usa seu valor padrão: max = 1000.
// - Condição `if (min > max)` (992 > 1000) é falsa.
// - Resultado: um número aleatório inteiro entre 992 (inclusive) e 999 (inclusive).
console.log(rand([992]));

// Chamada com um array onde o primeiro elemento é omitido (resultando em `undefined`).
// A vírgula `[,10]` indica que o primeiro elemento deve ser considerado `undefined`.
// - Desestruturação: 'min' usa seu valor padrão (0) porque o primeiro elemento é `undefined`.
//                    max = 10.
// - Condição `if (min > max)` (0 > 10) é falsa.
// - Resultado: um número aleatório inteiro entre 0 (inclusive) e 9 (inclusive).
console.log(rand([, 10]));

// Chamada com um array vazio.
// - Desestruturação: 'min' usa seu valor padrão (0) pois não há primeiro elemento.
//                    'max' usa seu valor padrão (1000) pois não há segundo elemento.
// - Condição `if (min > max)` (0 > 1000) é falsa.
// - Resultado: um número aleatório inteiro entre 0 (inclusive) e 999 (inclusive).
console.log(rand([]));

// ---- Ponto de Atenção: Chamada Sem Argumentos (Array) ----
// A linha abaixo está comentada. Se fosse executada, causaria um erro.
// console.log(rand());
// Erro: TypeError: Cannot read properties of undefined (reading 'Symbol(Symbol.iterator)')
// Isso ocorre porque a função `rand` espera um array para desestruturar. Se nenhum argumento
// for passado, ela tenta desestruturar `undefined`, o que não é possível para arrays.
//
// Para permitir que `rand()` funcionasse e usasse os valores padrão (min=0, max=1000),
// a assinatura da função precisaria fornecer um valor padrão para o próprio parâmetro do array:
//
// function rand([min = 0, max = 1000] = []) { // Note o `= []`
//     // ... corpo da função ...
// }
//
// Com ` = []`, se `rand` for chamada sem argumentos, o parâmetro do array assume
// o valor padrão `[]` (um array vazio), e então a desestruturação interna usa
// os padrões para `min` (0) e `max` (1000) conforme definido.


// function rand([min = 0, max = 1000]) {
//     if (min > max) [min ,max] = [max , min];
//     const valor = Math.random() * (max - min) + min;
//     return Math.floor(valor);
// };
// console.log(rand([50, 40]));
// console.log(rand([992]));
// console.log(rand([,10]));
// console.log(rand([]));
// // console.log(rand())