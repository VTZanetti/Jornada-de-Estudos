// Função Factory: padrão de projeto para criar objetos de forma flexível e reutilizável

function criarProduto(nome, preco){
    return {
        // Atribuição curta: nome e preco são usados diretamente como chave e valor
        nome,
        preco,
        desconto: 0.1, // desconto fixo de 10%
    };
};

// Exemplo de uso da função factory
console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("Ipad", 1199.49));

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 Esta função `criarProduto` é um exemplo de **Factory Function**, ou seja, 
uma função que retorna um **novo objeto** com base nos parâmetros fornecidos.

🔹 A grande vantagem desse padrão é que ele permite criar múltiplos objetos 
com a mesma estrutura sem repetir código.

📌 DICAS:
- Use factory functions quando quiser encapsular lógica de criação de objetos.
- Ideal quando os objetos compartilham uma estrutura comum, mas precisam ter dados diferentes.

🧪 SAÍDA ESPERADA:
{ nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
{ nome: 'Ipad', preco: 1199.49, desconto: 0.1 }

Se desejar incluir um cálculo do preço com desconto, pode-se expandir:

    precoFinal: preco * (1 - desconto)
*/
