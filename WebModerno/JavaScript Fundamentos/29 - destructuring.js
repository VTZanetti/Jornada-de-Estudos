// ---- Introdução à Desestruturação de Objetos (ES2015) ----
// A desestruturação (destructuring assignment) é uma sintaxe do JavaScript (introduzida no ES2015/ES6)
// que permite extrair dados de arrays ou objetos em variáveis distintas de forma mais concisa.
// É como "desempacotar" valores.

// ---- Objeto de Exemplo ----
// Vamos definir um objeto 'pessoa' que usaremos para demonstrar a desestruturação.

const pessoa = {
    nome: "Ana",       // Propriedade 'nome' do tipo string
    idade: 15,         // Propriedade 'idade' do tipo number
    endereco: {        // Propriedade 'endereco' que é um objeto aninhado
        logradouro: "Rua ABC",
        numero: 1000,
    },
};

// ---- Desestruturação Básica ----
// Aqui, estamos extraindo as propriedades 'nome' e 'idade' do objeto 'pessoa'.
// As chaves {} do lado esquerdo da atribuição indicam que estamos desestruturando um objeto.
// Os nomes dentro das chaves ('nome', 'idade') devem corresponder aos nomes das propriedades
// que queremos extrair do objeto 'pessoa'.
// Novas constantes 'nome' e 'idade' são criadas no escopo atual com os valores correspondentes.

const { nome, idade } = pessoa;
console.log(nome, idade); // Saída: Ana 15

// É equivalente a:
// const nome = pessoa.nome;
// const idade = pessoa.idade;

// ---- Desestruturando e Atribuindo a Novos Nomes de Variáveis ----
// Podemos extrair uma propriedade e atribuí-la a uma variável com um nome diferente.
// 'nome: n' significa: extraia a propriedade 'nome' de 'pessoa' e armazene seu valor
// na nova constante 'n'.
// 'idade: i' significa: extraia a propriedade 'idade' de 'pessoa' e armazene seu valor
// na nova constante 'i'.

const { nome: n, idade: i } = pessoa;
console.log(n, i); // Saída: Ana 15

// ---- Desestruturando com Valores Padrão ----
// Podemos definir valores padrão para o caso de uma propriedade não existir no objeto.
// 'sobrenome': O objeto 'pessoa' não tem uma propriedade chamada 'sobrenome'.
//              Portanto, a constante 'sobrenome' receberá 'undefined'.
// 'bemHumorada = true': O objeto 'pessoa' não tem uma propriedade 'bemHumorada'.
//                       Como fornecemos um valor padrão '= true', a constante 'bemHumorada'
//                       receberá 'true' em vez de 'undefined'.

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // Saída: undefined true

// ---- Desestruturando Objetos Aninhados ----
// Podemos desestruturar propriedades de objetos que estão dentro de outros objetos.
// 'endereco: { logradouro, numero, cep }' funciona em etapas:
// 1. Primeiro, ele acessa a propriedade 'endereco' do objeto 'pessoa'.
// 2. Em seguida, ele tenta desestruturar o objeto 'endereco' (que é pessoa.endereco).
// 3. 'logradouro': Extrai a propriedade 'logradouro' de 'pessoa.endereco'.
// 4. 'numero': Extrai a propriedade 'numero' de 'pessoa.endereco'.
// 5. 'cep': Tenta extrair a propriedade 'cep' de 'pessoa.endereco'. Como 'cep' não existe
//          em 'pessoa.endereco', a constante 'cep' receberá 'undefined'.

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Saída: Rua ABC 1000 undefined

// Nota: Tentar desestruturar uma propriedade que não existe no objeto pai resultaria em erro.
// Por exemplo, se 'pessoa' não tivesse a propriedade 'endereco':
// const { endereco: { logradouro } } = pessoa; // Isso geraria um TypeError
// Para evitar isso, você pode fornecer um valor padrão para o objeto aninhado também:
// const { endereco: { logradouro } = {} } = pessoaQuePodeNaoTerEndereco;