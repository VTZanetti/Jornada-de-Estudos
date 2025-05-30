// ✅ Chamada de função *antes* da definição só funciona com Function Declaration
console.log(soma(3,4)) // Pode chamar antes da declaração!

// ❌ As duas chamadas abaixo dariam erro se não estivessem comentadas,
// pois tentam usar funções antes de suas declarações como *expressões*:
// console.log(mult(3,3))
// console.log(sub(3,3))

// ✅ Function Declaration
// Essa forma de declarar uma função sofre "hoisting", ou seja, o JavaScript
// a "eleva" para o topo do escopo, permitindo que ela seja chamada antes da definição.
function soma(x, y) {
    return x + y;
}

// ✅ Function Expression (Função Anônima atribuída a uma variável)
// Aqui a função só pode ser chamada *depois* de sua definição.
const sub = function(x, y) {
    return x - y;
};
console.log(sub(3, 3)); // Saída: 0

// ✅ Named Function Expression (Função com nome, mas ainda é uma expressão)
// O nome `mult` após o `function` serve apenas para fins de depuração e não
// é acessível fora da função. Assim como a anterior, não sofre hoisting.
const mult = function mult(x, y) {
    return x * y;
};
console.log(mult(3, 3)); // Saída: 9

/*
📘 RESUMO DIDÁTICO:

🔹 Function Declaration:
   - Forma tradicional: `function nome() {...}`
   - Pode ser chamada antes da definição no código (hoisting).
   - Ideal quando você quer declarar funções utilitárias que serão usadas em vários lugares.

🔹 Function Expression:
   - Atribui uma função (anônima ou nomeada) a uma variável.
   - Não pode ser usada antes da definição.
   - Útil quando se quer armazenar funções em variáveis, arrays, objetos ou passar como parâmetro.

🔹 Named Function Expression:
   - Igual à anterior, mas com nome interno.
   - Útil para facilitar debug (o nome aparece em erros/stack traces).
   - Também não sofre hoisting.

📌 DICA:
Sempre que estiver aprendendo, teste o comportamento comentando/descomentando as chamadas
e observe os erros no console para entender bem o momento de "subida" das funções.
*/
