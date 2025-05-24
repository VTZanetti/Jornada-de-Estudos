// Declarando uma variável sem valor inicial
let valor;
console.log(valor);  // Saída: undefined (não foi inicializada)

// Atribuindo null -> significa ausência de valor, intencional
valor = null;
console.log(valor);  // Saída: null

// Se tentarmos acessar algum método sobre null ou undefined, dará erro
// console.log(valor.toString());  // Erro! Não pode chamar métodos de null ou undefined

// Criando um objeto vazio chamado 'produto'
const produto = {};
console.log(produto.preco);  // Saída: undefined (o atributo 'preco' não existe ainda)
console.log(produto);        // Saída: {}

// Atribuindo um valor ao atributo 'preco'
produto.preco = 3.50;
console.log(produto);        // Saída: { preco: 3.5 }

// Atribuindo undefined ao preco -> evite isso!
// Isso significa que o atributo existe, mas está "indefinido"
produto.preco = undefined;
console.log(!!produto.preco);  // Saída: false (undefined é considerado falso em booleano)
// Uma prática melhor seria deletar o atributo: delete produto.preco
console.log(produto);          // Saída: { preco: undefined }

// Atribuindo null ao preco -> mais adequado para dizer "sem preço"
produto.preco = null;
console.log(!!produto.preco);  // Saída: false (null também é considerado falso)
console.log(produto);          // Saída: { preco: null }
