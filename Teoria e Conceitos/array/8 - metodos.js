// Criando o array original
const numeros = [1, 2, 3, 4, 5];

// Remove 2 elementos a partir do índice 1 (ou seja, remove os valores 2 e 3)
numeros.splice(1, 2);
console.log("Após splice (remoção do índice 1, dois elementos):", numeros);

// Remove o último elemento do array (valor 5)
numeros.pop();

// Remove o novo último elemento do array (valor 4)
numeros.pop();

console.log("Após dois pop() (remoção dos dois últimos elementos):", numeros);
