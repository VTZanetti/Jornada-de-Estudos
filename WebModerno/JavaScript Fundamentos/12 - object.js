// Criando um objeto vazio chamado 'prod1'
const prod1 = {};

// Adicionando atributos ao objeto usando a notação de ponto
prod1.nome = "Celular Ultra Mega";    // Atributo 'nome'
prod1.preco = 4998.90;                // Atributo 'preco'

// Adicionando um atributo com espaço no nome usando colchetes
prod1["Deconto Legal"] = 0.20;        
// Não é recomendado usar nomes de atributos com espaço, pois exige a notação de colchetes

// Exibindo o objeto completo no console
console.log(prod1);
// Saída: { nome: 'Celular Ultra Mega', preco: 4998.9, 'Deconto Legal': 0.2 }

// Adicionando mais um atributo de desconto (boa prática, sem espaço no nome)
prod1.desconto = 0.2;

// Calculando o preço com desconto e adicionando como atributo
prod1.precoComDesconto = prod1.preco * (1 - prod1.desconto);

// Exibindo o valor do produto já com desconto aplicado
console.log("Valor do produto com desconto =", prod1.precoComDesconto);
// Saída: Valor do produto com desconto = 3999.12

// Criando outro objeto já com os atributos definidos diretamente
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
};

// Exibindo o segundo produto
console.log(prod2);
// Saída: { nome: 'Camisa Polo', preco: 79.9 }
