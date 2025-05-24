// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b); // Apenas imprime a soma dos dois parâmetros
}

imprimirSoma(2, 5); // Saída: 7
imprimirSoma(2);    // Saída: NaN (2 + undefined)
imprimirSoma(2, 5, 10, 6, 1, 2, 5, 7); // Saída: 7 (só considera os dois primeiros)
imprimirSoma();     // Saída: NaN (undefined + undefined)

// Função com retorno
function soma(a, b = 0) {
    return a + b; // Retorna a soma dos dois parâmetros, b tem valor padrão 0
}

console.log(soma(2, 5)); // Saída: 7
console.log(soma(2));    // Saída: 2 (b assume 0)
console.log(soma(1));    // Saída: 1 (b assume 0)
