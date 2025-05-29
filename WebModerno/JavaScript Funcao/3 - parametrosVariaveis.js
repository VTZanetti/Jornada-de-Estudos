// Contexto:
// A função soma() soma todos os argumentos passados, usando o objeto especial 'arguments' que existe em funções tradicionais no JS.
// 'arguments' é parecido com um array que contém todos os argumentos recebidos.
// A função itera sobre esses argumentos somando-os à variável soma.

// Pontos importantes:
// - Se algum argumento não for número, o resultado pode ser uma concatenação de strings ou NaN, dependendo dos valores.
// - No JS, o operador + concatena strings ou soma números, o que pode gerar comportamento inesperado se misturar tipos.

// Função soma original:
function soma() {
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i]; // Pode concatenar se algum argumento for string
    }
    return soma;
}

console.log(soma(1, 2, 2, 2, 2, 2, 2, 2));       // 15 (soma normal)
console.log(soma(2, 2, 2, 2, 2, 2, 2, 2, "trinta")); // "16trinta" (número + string concatena)
console.log(soma("a", "b", "c"));                 // "0abc" (começa 0 + "a" concatena)

// Notas finais:
// - Usar funções com 'arguments' é válido, mas em ES6+ é preferível usar parâmetros rest (...args).
// - Para evitar erros de tipo, convém validar ou converter os argumentos para números antes de somar.
// - Cuidado ao misturar strings e números com operador +.

// Versão melhorada usando rest operator e validação:
function somaMelhorada(...args) {
    let total = 0;
    for (let valor of args) {
        if (typeof valor === "number") {
            total += valor;
        } else {
            console.warn(`Aviso: valor "${valor}" ignorado porque não é número.`);
        }
    }
    return total;
}

console.log(somaMelhorada(1, 2, 2, 2, 2, 2, 2, 2));     // 15
console.log(somaMelhorada(2, 2, 2, 2, 2, 2, 2, 2, "trinta")); // 16 e aviso no console
console.log(somaMelhorada("a", "b", "c"));              // 0 e avisos no console
