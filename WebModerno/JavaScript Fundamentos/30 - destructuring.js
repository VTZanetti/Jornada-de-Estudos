// ---- Introdução à Desestruturação de Arrays (ES2015) ----
// Similar à desestruturação de objetos, a desestruturação de arrays permite
// extrair valores de um array e atribuí-los a variáveis distintas de forma concisa.
// A principal diferença é que, em vez de usar nomes de propriedades, a desestruturação
// de arrays se baseia na posição (índice) dos elementos no array.

// ---- Desestruturação Básica de Array ----
// Aqui, estamos desestruturando um array `[10]`.
// `[a]` do lado esquerdo da atribuição indica que estamos desestruturando um array.
// A variável `a` receberá o valor do primeiro elemento (índice 0) do array `[10]`.

const [a] = [10];

console.log(a); // Saída: 10

// É equivalente a:
// const tempArray = [10];
// const a = tempArray[0];

// ---- Desestruturando com Múltiplos Elementos e Ignorando Elementos ----
// Neste exemplo, estamos desestruturando o array `[10, 7, 9, 8]`.
// - `n1` recebe o primeiro elemento (10).
// - O espaço vazio `, ,` (vírgula seguida de outra vírgula) ignora o segundo elemento (7).
// - `n3` recebe o terceiro elemento (9).
// - O espaço vazio `, ,` ignora o quarto elemento (8).
// - `n5`: Tentamos acessar o quinto elemento. Como o array só tem 4 elementos,
//          `n5` receberia `undefined` se não houvesse valor padrão.
// - `n6 = 0`: Tentamos acessar o sexto elemento. Como não existe e fornecemos um
//             valor padrão `= 0`, `n6` receberá `0` em vez de `undefined`.

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

console.log(n1, n3, n5, n6); // Saída: 10 9 undefined 0

// Detalhando as atribuições:
// n1 = 10 (elemento no índice 0)
// (elemento no índice 1, que é 7, é ignorado)
// n3 = 9 (elemento no índice 2)
// (elemento no índice 3, que é 8, é ignorado)
// n5 = undefined (não há elemento no índice 4 no array da direita)
// n6 = 0 (não há elemento no índice 5, então o valor padrão 0 é usado)

// ---- Desestruturando Arrays Aninhados ----
// Podemos desestruturar arrays que estão dentro de outros arrays (arrays multidimensionais).
// O array original é `[[, 9, 8], [2, 6, 8]]`.
// - `const [, ...]` : A primeira vírgula no padrão de desestruturação `[, ...]`
//                    significa que estamos ignorando o primeiro elemento do array principal.
//                    O primeiro elemento é o array `[, 9, 8]` (que na verdade é `[undefined, 9, 8]`).
// - `... [, nota]]`: Após ignorar o primeiro elemento, estamos focando no segundo elemento
//                    do array principal, que é `[2, 6, 8]`.
//                    Dentro deste segundo elemento (que é um array), estamos novamente usando desestruturação:
//                    - `[, nota]`: A vírgula inicial ignora o primeiro elemento de `[2, 6, 8]` (que é 2).
//                    - `nota`: A variável `nota` recebe o segundo elemento de `[2, 6, 8]` (que é 6).
//                      O terceiro elemento (8) é ignorado porque não há variável para recebê-lo.

const [, [, nota]] = [[undefined, 9, 8], [2, 6, 8]];
// Para maior clareza, vamos reescrever o array original com um valor explícito ou `undefined` no primeiro elemento do primeiro array aninhado:
// const arrayOriginal = [ [undefined, 9, 8], [2, 6, 8] ];
// ou
// const arrayOriginal = [ ["ignorado", 9, 8], [2, 6, 8] ];
//
// Analisando `const [, [, nota]] = arrayOriginal;`:
// 1. `const [ elementoIgnorado, segundoElementoPrincipal ] = arrayOriginal;`
//    - `elementoIgnorado` seria `[undefined, 9, 8]`
//    - `segundoElementoPrincipal` seria `[2, 6, 8]`
//
// 2. Agora, desestruturamos `segundoElementoPrincipal` que é `[2, 6, 8]` usando `[, nota]`:
//    `const [primeiroDoAninhadoIgnorado, nota] = segundoElementoPrincipal;`
//    - `primeiroDoAninhadoIgnorado` seria `2`
//    - `nota` seria `6`

console.log(nota); // Saída: 6