// Função em JavaScript é First-Class Object (Citizen)
// Ou seja, pode ser tratada como qualquer outro dado:
// Pode ser armazenada em variáveis, passada como argumento, retornada de funções, etc.
// Isso permite trabalhar com Higher-Order Functions (funções de ordem superior)

// ---------- 1. Criar função de forma literal ----------
function fun1() {
    console.log("Função fun1 executada");
}; // Função nomeada tradicional

// ---------- 2. Armazenar função em uma variável ----------
const fun2 = function () {
    console.log("Função fun2 executada");
}; // Função anônima atribuída a uma constante

// ---------- 3. Armazenar função dentro de um array ----------
const array = [
    function (a, b) { return a + b }, // função anônima de soma
    fun1,
    fun2
];
console.log(array[0](2, 5)); // Executa a primeira função do array: 2 + 5 = 7

// ---------- 4. Armazenar função como atributo de objeto ----------
const obj = {};
obj.falar = function () {
    return "Função falar executada";
};
console.log(obj.falar()); // Acessa e executa a função dentro do objeto

// ---------- 5. Passar função como parâmetro ----------
function run(fun) {
    fun(); // Executa a função recebida como argumento
};

run(function () {
    console.log("Executando função passada como parâmetro");
});

// ---------- 6. Retornar função de outra função ----------
function soma(a, b) {
    // Retorna uma nova função que usa o valor de a e b
    return function (c) {
        console.log(a + b + c); // Utiliza closure para manter acesso a 'a' e 'b'
    };
};

soma(9, 1)(10); // Chamada direta e encadeada: (9 + 1 + 10) = 20

// Podemos também armazenar o retorno (uma nova função) em uma variável:
const cincoMais = soma(2, 3); // soma(2, 3) retorna uma função esperando o valor de 'c'
cincoMais(5); // (2 + 3 + 5) = 10

/*
EXPLICAÇÃO DIDÁTICA:

🔹 First-Class Functions:
    ➤ Funções tratadas como dados: podem ser atribuídas, passadas, retornadas etc.

🔹 Higher-Order Functions:
    ➤ Funções que:
        - Recebem outras funções como argumentos
        - Ou retornam novas funções

🔹 Closure:
    ➤ A função retornada por `soma` "lembra" os valores de `a` e `b`
    ➤ Mesmo após `soma` ter sido executada, os valores ainda estão acessíveis dentro da função interna

DICAS:
✔ Esse modelo permite criar funções mais genéricas, reutilizáveis e flexíveis.
✔ Muito usado em programação funcional, bibliotecas modernas, e callbacks em JS.
✔ Funções retornando funções são úteis para personalizar comportamentos ou construir funções parciais.
*/
