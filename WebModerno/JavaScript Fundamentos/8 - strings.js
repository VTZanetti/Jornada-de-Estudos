// Declarando uma constante string
const escola = "Cod3r";

// charAt -> Retorna o caractere na posição informada (índice começa em 0)
console.log(escola.charAt(4));          // Resultado: 'r' (posição 4 → C o d 3 r)
console.log(escola.charAt(5));          // Resultado: '' (string vazia, não existe índice 5)

// charCodeAt -> Retorna o código Unicode do caractere na posição indicada
console.log(escola.charCodeAt(3));      // Resultado: 51 (código do caractere '3')

// indexOf -> Retorna o índice da primeira ocorrência do caractere indicado
console.log(escola.indexOf('3'));       // Resultado: 3 (posição onde está o '3')

// substring -> Retorna parte da string
console.log(escola.substring(1));       // Resultado: 'od3r' (começa do índice 1 até o fim)
console.log(escola.substring(0, 3));    // Resultado: 'Cod' (do índice 0 até 3, sem incluir o 3)

// concat -> Concatena (junta) strings
console.log("Escola ".concat(escola).concat("!")); // Resultado: 'Escola Cod3r!'
// Também poderia ser feito assim: console.log("Escola " + escola + "!")

// replace -> Substitui um valor dentro da string
console.log(escola.replace(3, "e"));    // Resultado: 'Coder' (substitui o '3' por 'e')

// split -> Divide a string em um array, usando o separador indicado
console.log('Ana,Maria,Pedro'.split(",")); 
// Resultado: [ 'Ana', 'Maria', 'Pedro' ] → separa pelos ',' criando um array
