// Dividir por zero em JavaScript não gera erro, retorna 'Infinity'
console.log(7 / 0);                     // Resultado: Infinity

// JavaScript tenta converter a string '10' para número automaticamente
console.log("10" / 2);                  // Resultado: 5

// Quando não é possível fazer a conversão, retorna NaN (Not a Number)
console.log("Show!" * 2);               // Resultado: NaN

// Problema clássico de precisão com números de ponto flutuante
console.log(0.1 + 0.7);                 // Resultado: 0.7999999999999999
// Isso ocorre por limitações de representação binária de números decimais
// É um problema comum em várias linguagens, não só no JavaScript

// Erro comum: não podemos fazer 10.toString() direto porque o ponto é interpretado como separador decimal
// console.log(10.toString())            // Isso gera erro de sintaxe

// Forma correta: colocar o número entre parênteses ou usar dois pontos
console.log((10.345).toFixed(2));       // Resultado: '10.35' (com 2 casas decimais)
// Também funcionaria assim: console.log(10..toFixed(2))
