// 📦 Manipulando objetos com métodos nativos do JavaScript

// 🧍 Criando um objeto literal com algumas propriedades
const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13,
};

// 🔍 Object.keys(obj)
// Retorna um array com as chaves (nomes das propriedades) do objeto
console.log(Object.keys(pessoa)); // Saída: [ 'nome', 'idade', 'peso' ]

// 🔍 Object.values(obj)
// Retorna um array com os valores das propriedades
console.log(Object.values(pessoa)); // Saída: [ 'Rebeca', 2, 13 ]

// 🔍 Object.entries(obj)
// Retorna um array de arrays, onde cada subarray representa uma entrada [chave, valor]
console.log(Object.entries(pessoa));
// Saída: [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// 🔁 Iterando sobre as entradas do objeto com forEach e desestruturação
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
    // Exemplo de saída:
    // nome: Rebeca
    // idade: 2
    // peso: 13
});

// 🛠️ Adicionando uma nova propriedade ao objeto com controle de atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // agora a nova propriedade será listada em Object.keys
    writable: false,    // impede que o valor seja modificado depois de definido
    value: "01/01/2019" // valor fixado na propriedade
});

// 🔄 Tentando alterar a propriedade protegida por writable: false
pessoa.dataNascimento = "01/01/1999"; // NÃO terá efeito, pois writable está false

// 📌 A data continua inalterada
console.log(pessoa.dataNascimento); // Saída: 01/01/2019

// 🔍 Como enumerable está true, 'dataNascimento' aparece entre as chaves do objeto
console.log(Object.keys(pessoa)); 
// Saída: [ 'nome', 'idade', 'peso', 'dataNascimento' ]


// 🔀 Object.assign(destino, ...fontes)
// Copia as propriedades de um ou mais objetos para o objeto de destino

const dest = { a: 1 };            // objeto de destino inicial
const o1 = { b: 2 };              // primeiro objeto de origem
const o2 = { c: 3, a: 4 };        // segundo objeto de origem (sobrescreve 'a')

const obj = Object.assign(dest, o1, o2); 
// Resultado: obj = { a: 4, b: 2, c: 3 }
// Observação: o valor 'a: 1' foi sobrescrito por 'a: 4' do o2

// ❄️ Object.freeze(obj)
// Congela o objeto: impede modificações (adição, remoção ou alteração de propriedades)
Object.freeze(obj);

// 🔄 Tentativa de alterar propriedade 'c' – será ignorada silenciosamente
obj.c = 1234;

console.log(obj); // Saída: { a: 4, b: 2, c: 3 }

/*
📘 RESUMO DOS CONCEITOS:
- Object.keys: pega todas as chaves enumeráveis do objeto.
- Object.values: pega todos os valores das propriedades.
- Object.entries: fornece pares chave/valor para iteração.
- defineProperty: permite criar propriedades com configurações específicas (enumerable, writable, etc).
- assign: funde objetos em um só (sobrescrevendo da esquerda para a direita).
- freeze: torna o objeto completamente imutável.
*/
