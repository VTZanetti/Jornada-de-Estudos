// Verificando os tipos em JavaScript relacionados a funções, objetos e classes

// O operador typeof é usado para verificar o tipo de uma variável ou expressão

// 'Object' é uma função construtora interna do JavaScript
console.log(typeof Object); // Saída: function (porque em JavaScript, funções construtoras são do tipo 'function')

// 'new Object()' cria uma instância (um objeto) a partir da função construtora Object
console.log(typeof new Object()); // Saída: object

// Declarando uma função chamada 'cliente'
const cliente = function () {};

// O tipo da função 'cliente' é 'function'
console.log(typeof cliente); // Saída: function

// Quando usamos 'new cliente()', estamos criando um objeto baseado na função 'cliente'
console.log(typeof new cliente); // Saída: object

// Declarando uma classe chamada 'produto'
class produto {};

// Classes em JavaScript, internamente, também são do tipo 'function'
console.log(typeof produto); // Saída: function

// Criando uma instância (um objeto) da classe 'produto' usando 'new'
console.log(typeof new produto()); // Saída: object

// Resumo:
// - Toda função, inclusive classes, são do tipo 'function' em JavaScript.
// - Ao instanciar uma função ou classe usando 'new', o resultado é um 'object'.
