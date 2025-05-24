// Declarando um array com 4 elementos numéricos
const valores = [7.7, 8.9, 6.3, 9.2];

// Acessando elementos do array pelos índices
console.log(valores[0], valores[3]);   // Saída: 7.7 9.2 (índice começa em 0)

// Acessando um índice que não existe (4)
// Quando o índice não existe, retorna 'undefined'
console.log(valores[4]);               // Saída: undefined

// Adicionando um novo valor na posição 4
valores[4] = 10;

// Agora o array tem 5 elementos
console.log(valores);                  // Saída: [7.7, 8.9, 6.3, 9.2, 10]

// Saber quantos elementos tem no array usando length
console.log(valores.length);           // Saída: 5

// Adicionando vários tipos de dados no array (um objeto, boolean, null e string)
valores.push({id: 3}, false, null, 'teste');
console.log(valores);
// Saída: [7.7, 8.9, 6.3, 9.2, 10, {id:3}, false, null, 'teste']
// Arrays em JS podem conter dados de tipos diferentes

// Removendo o último elemento do array com pop()
console.log(valores.pop());            // Saída: 'teste' (o último elemento foi removido)

// Removendo o elemento do índice 0 com delete
delete valores[0];
console.log(valores);
// Saída: [ <1 empty item>, 8.9, 6.3, 9.2, 10, {id:3}, false, null ]
// Obs: 'delete' remove o valor, mas deixa o espaço vazio (empty), não reorganiza o array

// Verificando o tipo da variável 'valores'
console.log(typeof valores);           // Saída: 'object'
// Arrays são do tipo objeto em JavaScript

// Atribuindo um valor na posição 100 (índice bem além do tamanho atual)
valores[100] = 5;
console.log(valores);
// O array agora tem tamanho 101, com muitos elementos vazios (empty) entre os índices existentes
