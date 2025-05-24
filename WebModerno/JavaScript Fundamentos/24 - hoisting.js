// Tentando acessar a variável 'a' antes da declaração com 'var'
console.log("a =", a); // Saída: a = undefined
// Isso acontece por causa do hoisting: a declaração da variável 'a' é movida para cima, mas não sua atribuição

var a = 2; // Declaração e atribuição de 'a'

console.log("a =", a); // Saída: a = 2

// Tentativa de acessar a variável 'b' antes da declaração com 'let' (descomentado causaria erro)
// console.log("b =", b); // Erro: Cannot access 'b' before initialization

let b = 2; // Declaração e atribuição de 'b'

// Explicação:
// Variáveis declaradas com 'var' são içadas (hoisted) com valor undefined, então podem ser acessadas antes da linha em que são declaradas, mas com valor undefined.
// Variáveis declaradas com 'let' ou 'const' também são içadas, porém ficam em "zona morta temporal" (TDZ) até a linha da declaração, portanto, acessá-las antes da declaração gera erro.