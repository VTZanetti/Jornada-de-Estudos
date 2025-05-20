// Criando um array inicial
const numeros = [1, 2, 3, 4, 5];

// Adiciona o número 6 ao final do array
numeros.push(6);

// Altera o primeiro elemento do array (índice 0) para 100
numeros[0] = 100;

// Retorna o índice da primeira ocorrência do valor 4
console.log("\nIndex do número 4:", numeros.indexOf(4));

// Procura o valor 4 a partir da posição de índice 4
console.log("Index do número 4 a partir do índice 4:", numeros.indexOf(4, 4));

// Verifica se o número 10 está presente no array (false)
console.log("O número 10 está presente?", numeros.includes(10));

// Verifica se o número 100 está presente no array (true)
console.log("O número 100 está presente?", numeros.includes(100), "\n");

// Junta todos os elementos do array em uma string, separados por " - "
console.log("Array unido com hífens:", numeros.join(" - "));

// Mostra o array atual no console
console.log("\nArray atual:", numeros, "\n");

// Cria um novo array unindo 'numeros' com os valores 7, 8 e 9
const numero2 = numeros.concat(7, 8, 9);
console.log("Novo array com concat:", numero2);
