// Declarando uma variável booleana
let isAtivo = false;
console.log(isAtivo);                   // Resultado: false

// Atribuindo true
isAtivo = true;
console.log(isAtivo);                   // Resultado: true

// Atribuindo um número (1) e verificando se é verdadeiro
console.log(!!isAtivo);                 // Resultado: true
console.log(!!true);                    // Resultado: true
// (!!) -> dupla negação: converte para booleano

// ---------------------------
// Exemplos de valores verdadeiros (truthy)
console.log("Os verdadeiros...");
console.log(!!3);                       // true (número diferente de 0 é verdadeiro)
console.log(!!-1);                      // true (números negativos também são verdadeiros)
console.log(!!" ");                      // true (string com espaço não é vazia)
console.log(!!"texto");                  // true (string não vazia)
console.log(!![]);                       // true (array, mesmo vazio, é truthy)
console.log(!!{});                       // true (objeto, mesmo vazio, é truthy)
console.log(!!(isAtivo = 123));          // true (número atribuído, então retorna o valor e verifica se é truthy)

// ---------------------------
// Exemplos de valores falsos (falsy)
console.log("Os falsos...");
console.log(!!0);                        // false (zero é falsy)
console.log(!!"");                       // false (string vazia)
console.log(!!null);                     // false (null é falsy)
console.log(!!NaN);                      // false (Not a Number)
console.log(!!undefined);                // false (indefinido)
console.log(!!(isAtivo = false));        // false (atribuindo false e checando)

// ---------------------------
// Exemplo de uso prático com operador lógico OU (||)
console.log("Pra finalizar");
console.log(('' || null || 0 || 'epa')); // Resultado: 'epa'
// O operador || retorna o primeiro valor 'truthy' que encontrar
// Se todos forem falsy, retorna o último valor

// Exemplo comum em sistemas: valor padrão
let nome = "";
console.log(nome || "Desconhecido");     // Resultado: 'Desconhecido'
// Se nome for uma string vazia (falsy), mostra 'Desconhecido'
     