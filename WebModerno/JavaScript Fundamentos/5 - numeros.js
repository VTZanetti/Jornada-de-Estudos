// Declarando duas constantes com valores numéricos
const peso1 = 1.1;                     // Peso 1 como número decimal
const peso2 = Number('2.0');            // Peso 2 convertido de string para número usando Number()

// Exibindo os valores de peso1 e peso2
console.log(peso1, peso2);

// Verificando se os números são inteiros
console.log(Number.isInteger(peso1));   // false (não é inteiro, pois tem casa decimal)
console.log(Number.isInteger(peso2));   // true (apesar de vir de uma string '2.0', é considerado inteiro)

// Declarando as avaliações (notas)
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

// Calculando o total ponderado das avaliações
const total = avaliacao1 * peso1 + avaliacao2 * peso2;

// Calculando a média ponderada
const media = total / (peso1 + peso2);

// Exibindo a média com apenas 2 casas decimais
console.log(media.toFixed(2));          // Formata para 2 casas decimais. Retorna uma string (ex.: "7.93")

// Exibindo a média em formato binário
console.log(media.toString(2));         // Converte o número para string na base 2 (binário)

// Verificando os tipos das variáveis
console.log(typeof media);              // Resultado: 'number' → media é do tipo número
console.log(typeof Number);             // Resultado: 'function' → Number é uma função construtora
