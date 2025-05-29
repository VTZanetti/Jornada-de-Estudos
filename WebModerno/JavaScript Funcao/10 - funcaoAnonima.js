// 🔧 Funções que realizam operações matemáticas básicas
const soma = function (x, y) { return x + y };          // Soma dois números
const multiplicacao = function (x, y) { return x * y }; // Multiplica dois números
const subtracao = function (x, y) { return x - y };     // Subtrai o segundo do primeiro
const divisao = function (x, y) { return x / y };       // Divide o primeiro pelo segundo

// 🔹 Função que recebe outra função como parâmetro (função de ordem superior)
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b)); // Executa a operação e imprime o resultado
};

// Chamadas usando diferentes formas de passar a função de operação:
imprimirResultado(3, 4, soma); // Utilizando função nomeada 'soma' → Saída: 7

// Passando uma função anônima diretamente como argumento (subtração)
imprimirResultado(3, 4, function(x, y) {
    return x - y;
}); // Saída: -1

// Passando uma arrow function diretamente (multiplicação)
imprimirResultado(3, 4, (x, y) => x * y); // Saída: 12

// Utilizando a função nomeada 'multiplicacao' como operação
imprimirResultado(3, 4, multiplicacao); // Saída: 12

// 🔸 Objeto com função como atributo
const Pessoa = {
    falar: function() {
        console.log("Opa");
    },
};

Pessoa.falar(); // Acessando e executando o método do objeto → Saída: "Opa"

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 Em JavaScript, funções são **First-Class Citizens**:
   - Podem ser atribuídas a variáveis
   - Podem ser passadas como parâmetros
   - Podem ser retornadas de outras funções
   - Podem ser armazenadas em estruturas (como objetos e arrays)

🔹 A função `imprimirResultado` é um exemplo clássico de **função de ordem superior**:
   - Ela aceita outra função como argumento (`operacao`) e a executa com os parâmetros `a` e `b`.

✅ VANTAGENS DESSE PADRÃO:
- Muito útil para reutilização de lógica
- Permite passar diferentes comportamentos sem precisar modificar o código da função principal
- É a base do paradigma funcional em JavaScript

💡 DICA:
Sempre que você quiser deixar uma função mais **flexível e reutilizável**, considere permitir que ela aceite outras funções como parâmetros.
*/
