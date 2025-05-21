// Criando um objeto chamado 'cliente' com várias informações pessoais e de endereço
const cliente = {
    condigo: 16532,         // Código de identificação do cliente
    nome: "Ana",            // Nome do cliente
    vip: true,              // Status VIP (true = é VIP)

    // Objeto 'endereco' dentro do cliente
    endereco: {
        logradouro: "Rua ABC",                 // Nome da rua
        numero: 123,                           // Número do imóvel
        compelemnto: "apto 101 Bloco B",       // Complemento (ex: apartamento)

        // Array de objetos representando pontos de referência próximos
        pontosRef: [
            { nome: "Hospital X", muitoProximo: true },
            { nome: "Shopping Y", muitoProximo: false }
        ]
    },

    // Lista de nomes dos filhos do cliente (array de strings)
    nomeFilhos: ["Bia", "Carlos", "Gabriel"]
};

// Acessando o logradouro (rua) do endereço usando colchetes
console.log(cliente["endereco"]["logradouro"]);  // Saída: Rua ABC

// Acessando o logradouro usando notação de ponto (forma mais comum e legível)
console.log(cliente.endereco.logradouro);        // Saída: Rua ABC

// Acessando se o segundo ponto de referência está muito próximo (índice 1 do array pontosRef)
console.log(cliente.endereco.pontosRef[1].muitoProximo);  // Saída: false
