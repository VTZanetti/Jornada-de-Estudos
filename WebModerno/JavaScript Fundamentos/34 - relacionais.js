// Introdução:
// Este código tem como objetivo demonstrar o uso dos principais operadores de comparação em JavaScript.
// Serão utilizados operadores de igualdade (==, ===), diferença (!=, !==), maior, menor, maior ou igual e menor ou igual.
// Também mostra como funciona a comparação entre objetos, especialmente com datas, e entre os tipos null e undefined.

// Comparação entre string e número usando '=='
// '==' compara apenas os valores, sem considerar o tipo (faz coerção de tipo)
console.log("01 -", "1" == 1); // true -> compara valor, ignora tipo

// Comparação entre string e número usando '==='
// '===' compara valor e tipo (sem coerção)
console.log("02 -", "1" === 1); // false -> tipos diferentes (string e number)

// Verifica se '3' é diferente de 3 usando '!='
// '!=' compara apenas os valores, sem considerar o tipo
console.log("03 -", "3" != 3); // false -> valores são iguais, ignora tipo

// Verifica se '3' é diferente de 3 usando '!=='
// '!==' compara valor e tipo (sem coerção)
console.log("04 -", "3" !== 3); // true -> tipos diferentes

// Comparações matemáticas padrão
console.log("05 -", 3 < 2);  // false -> 3 não é menor que 2
console.log("06 -", 3 > 2);  // true  -> 3 é maior que 2
console.log("07 -", 3 <= 2); // false -> 3 não é menor ou igual a 2
console.log("08 -", 3 >= 2); // true  -> 3 é maior ou igual a 2

// Comparação entre objetos (no caso, objetos Date)
const d1 = new Date(0); // Data referente à época UNIX (01/01/1970)
const d2 = new Date(0);

// Comparando se os objetos são estritamente iguais (===)
// Isso verifica se eles ocupam o mesmo espaço na memória (referência)
console.log("09 -", d1 === d2); // false -> são objetos diferentes na memória

// Comparando se os objetos são iguais usando '=='
// Também compara referência, então o resultado é igual ao anterior
console.log("10 -", d1 == d2); // false -> objetos diferentes na memória

// Comparando os valores dos objetos (getTime retorna o valor em milissegundos)
console.log("11 -", d1.getTime() === d2.getTime()); // true -> valores internos são iguais

// Comparação entre undefined e null usando '=='
// Aqui dá true, pois '==' considera que ambos representam ausência de valor
console.log("12 -", undefined == null); // true

// Comparação entre undefined e null usando '==='
// Aqui dá false, pois são tipos diferentes
console.log("13 -", undefined === null); // false

// Notas finais:
// - Use sempre '===' e '!==' ao invés de '==' e '!=', pois evitam problemas de coerção implícita de tipo.
// - Comparações entre objetos sempre verificam a referência (memória), não o conteúdo, a não ser que você compare atributos específicos, como fizemos com getTime().
// - Saber quando usar cada operador é fundamental para evitar bugs e comportamentos inesperados no código.
