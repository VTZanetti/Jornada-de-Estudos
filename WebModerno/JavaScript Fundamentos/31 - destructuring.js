// ---- Função com Desestruturação de Objeto nos Parâmetros ----
// A função 'rand' demonstra uma técnica poderosa do ES2015: a desestruturação de objetos
// diretamente na lista de parâmetros. Isso permite nomear as propriedades esperadas
// de um objeto passado como argumento e definir valores padrão para elas.
//
// No caso de 'rand({ min = 0, max = 1000 })':
// - A função espera um objeto como seu único argumento.
// - Ela tentará extrair 'min' e 'max' desse objeto.
// - Se 'min' não for fornecido no objeto, seu valor padrão será 0.
// - Se 'max' não for fornecido no objeto, seu valor padrão será 1000.
// Essas variáveis 'min' e 'max' ficam disponíveis diretamente no corpo da função.

function rand({ min = 0, max = 1000 }) {
    // Geração do valor aleatório:
    // 1. Math.random(): Gera um número decimal entre 0 (inclusivo) e 1 (exclusivo).
    // 2. (max - min): Calcula a amplitude do intervalo desejado.
    // 3. Math.random() * (max - min): Escala o número aleatório para o tamanho da amplitude.
    //    O resultado é um número entre 0 (inclusivo) e (max - min) (exclusivo).
    // 4. ... + min: Desloca o intervalo para que comece em 'min'.
    //    Agora temos um número entre 'min' (inclusivo) e 'max' (exclusivo).
    const valor = Math.random() * (max - min) + min;

    // Math.floor(): Arredonda o 'valor' para o número inteiro mais próximo, para baixo.
    // Isso garante que o resultado seja um inteiro.
    // Dado que 'valor' está no intervalo [min, max), após o Math.floor,
    // o resultado estará no intervalo de inteiros [min, max - 1].
    return Math.floor(valor);
}

// ---- Demonstração da Utilização da Função 'rand' ----

// Primeiro, criamos um objeto 'obj' com as propriedades 'max' e 'min'.
// Estes valores específicos (40 e 50) serão usados pela função 'rand',
// sobrepondo os valores padrão definidos na assinatura da função.
const obj = { max: 50, min: 40 };

// Ao chamar 'rand(obj)', a desestruturação nos parâmetros da função 'rand' fará com que:
// - 'min' dentro da função seja 40 (vindo de obj.min).
// - 'max' dentro da função seja 50 (vindo de obj.max).
// O console exibirá um número inteiro aleatório entre 40 (inclusive) e 49 (inclusive).
console.log(rand(obj));

// Aqui, chamamos 'rand' com um objeto literal definido diretamente na chamada da função.
// - 'min' será 555.
// - 'max' será 560.
// O console exibirá um número inteiro aleatório entre 555 (inclusive) e 559 (inclusive).
console.log(rand({ min: 555, max: 560 }));

// Nesta chamada, passamos um objeto vazio '{}' para 'rand'.
// Como o objeto está vazio:
// - A propriedade 'min' não é encontrada, então o valor padrão (0) é usado.
// - A propriedade 'max' não é encontrada, então o valor padrão (1000) é usado.
// O console exibirá um número inteiro aleatório entre 0 (inclusive) e 999 (inclusive).
console.log(rand({}));

// ---- Ponto de Atenção: Chamada Sem Argumentos ----
// Se tentássemos chamar a função 'rand' sem nenhum argumento (ex: `rand()`),
// ocorreria um erro (TypeError). Isso acontece porque a função tentaria
// desestruturar `undefined` (já que nenhum objeto foi passado), o que não é permitido.
//
// Para permitir que `rand()` funcione e use os valores padrão, a assinatura da função
// precisaria fornecer um valor padrão para o próprio parâmetro do objeto:
//
// function rand({ min = 0, max = 1000 } = {}) {
//     // ... corpo da função ...
// }
//
// Com `{ min = 0, max = 1000 } = {}`, se `rand` for chamada sem argumentos,
// o parâmetro do objeto assume o valor padrão `{}`, e então a desestruturação
// interna usa os padrões para `min` (0) e `max` (1000).

// function rand ({ min = 0, max = 1000}) {

//     const valor = Math.random() * (max - min) + min;

//     return Math.floor(valor);

// };



// const obj = { max: 50, min: 40 }

// console.log(rand(obj));

// console.log(rand({ min: 555, max: 560}))

// console.log(rand({}))