// Criando um array vazio para armazenar funções
const funcs = [];

// Usando um loop com 'let' para declarar 'i'
// 'let' tem escopo de bloco, então cada iteração cria uma nova variável 'i' diferente
for (let i = 0; i < 10; i++) {
    // Adiciona uma função que imprime o valor atual de 'i' daquela iteração
    funcs.push(function() {
        console.log(i);
    });
}

// Chamando a função na posição 2 do array
funcs[2](); // Saída: 2

// Chamando a função na posição 8 do array
funcs[8](); // Saída: 8

/*
Explicação:
- Usar 'let' no for cria uma nova instância da variável 'i' para cada ciclo do loop.
- Cada função armazenada no array 'funcs' "lembra" o valor específico de 'i' da sua iteração.
- Portanto, ao chamar funcs[2]() e funcs[8](), as funções imprimem 2 e 8 respectivamente.
- Isso resolve o problema que acontece quando 'var' é usado, pois 'var' não tem escopo de bloco.
*/
