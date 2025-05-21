// Criando um array de números
const numeros = [1, 2, 3];

// Criando um objeto com propriedades
let produto = {
    nome: 'Caneta',
    preco: 9.99,
    desconto: 0.2,
};

// Acessando o primeiro elemento do array (índice 0)
console.log("Primeiro número do array:", numeros[0]);

// Acessando propriedades do objeto usando colchetes
console.log("Nome do produto (com colchetes):", produto["nome"]);
console.log("Preço do produto (com colchetes):", produto["preco"]);
console.log("Desconto do produto (com colchetes):", produto["desconto"]);

// Acessando propriedades do objeto usando notação de ponto
console.log("Nome do produto (com ponto):", produto.nome);
console.log("Preço do produto (com ponto):", produto.preco);
console.log("Desconto do produto (com ponto):", produto.desconto);

// Verificando o tipo da variável 'produto'
console.log("Tipo da variável 'produto':", typeof produto);
