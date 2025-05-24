// Armazenando uma função em uma variável (função anônima)
// Essa função faz a soma de dois números e imprime no console
const imprimirSoma = function(a, b) {
    console.log(a + b); // Exibe a soma no console
};

imprimirSoma(2, 5); // Saída: 7

// Armazenando uma função arrow em uma variável
// Essa função faz a soma de dois números e retorna o resultado
const soma = (a, b) => {
    return a + b; // Retorna a soma dos dois números
};

console.log(soma(2, 5)); // Saída: 7

// Retorno implícito
// Quando a função tem apenas uma linha, pode omitir as chaves e a palavra 'return'
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 5)); // Saída: -3

// Arrow function com um único parâmetro
// Quando há apenas um parâmetro, pode omitir os parênteses
const imprimir2 = a => console.log(a);

imprimir2("Parabens"); // Saída: Parabens
