// Coleção dinâmica de pares chave/valor
const produto = new Object(); // Criando objeto com construtor Object
produto.nome = "Cadeira"; // Criando e adicionando propriedade dinamicamente
produto["marca do produto"] = "Genérica"; // Acesso com string quando o nome tem espaço
produto.preco = 220; // Outra propriedade

console.log("Produto completo:");
console.log(produto);
console.log("======================================================================================");

// Removendo propriedades com `delete`
delete produto.preco; // Remove a propriedade `preco` do objeto
delete produto["marca do produto"]; // Remove a propriedade com nome composto

console.log("Produto após remoções:");
console.log(produto);
console.log("======================================================================================");

// Criando um objeto mais complexo com aninhamento de objetos e array
const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [
        { nome: "Junior", idade: 19 },
        { nome: "Ana", idade: 42 }
    ],
    calcularValorSeguro: function () {
        // Aqui seria implementado um cálculo real
        console.log("Cálculo do seguro ainda não implementado");
    }
};

console.log("Carro completo:");
console.log(carro);
console.log("======================================================================================");

// Alterando valores aninhados
carro.proprietario.endereco.numero = 1000; // Acesso direto à propriedade interna
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"; // Acesso com notação de string

console.log("Carro após modificações:");
console.log(carro);
console.log("======================================================================================");

// Removendo propriedades aninhadas
delete carro.condutores; // Remove array de condutores
delete carro.proprietario.endereco; // Remove objeto endereco
delete carro.calcularValorSeguro; // Remove método calcularValorSeguro

console.log("Carro após remoções:");
console.log(carro);
console.log("======================================================================================");

// Tentando acessar propriedade removida (seguro)
console.log("Tentativa de acessar propriedade removida (condutores):");
console.log(carro.condutores); // undefined porque foi deletado

// Acesso seguro com verificação manual
if (carro.condutores) {
    console.log("Número de condutores:", carro.condutores.length);
} else {
    console.log("Propriedade 'condutores' não existe mais."); // Evita erro de acessar length de undefined
}

// Acesso moderno com optional chaining (?.) e nullish coalescing (??)
console.log("Usando optional chaining:");
console.log("Número de condutores:", carro.condutores?.length ?? "condutores não existe");

// Clonando o objeto carro (shallow copy, ou seja, cópia rasa)
const carroClone = { ...carro }; // Usa spread operator para copiar as propriedades
console.log("Clone do carro:");
console.log(carroClone);
