// Criando um array vazio para armazenar funções
const funcs = [];

// Usando um loop com 'var' para adicionar funções ao array
for (var i = 0; i < 10; i++) {
    // Adiciona uma função anônima que imprime o valor de 'i' quando chamada
    funcs.push(function() {
        console.log(i);
    });
}

// Chamando a função na posição 2 do array
funcs[2](); // Saída: 10
// Chamando a função na posição 8 do array
funcs[8](); // Saída: 10

/*
Explicação:
- A variável 'i' foi declarada com 'var', que tem escopo de função/global, não de bloco.
- Durante o loop, as funções armazenadas no array não são executadas imediatamente, apenas armazenadas.
- Quando executamos funcs[2]() ou funcs[8](), elas usam o valor atual de 'i', que após o loop é 10.
- Por isso, ambas as funções imprimem 10, não os valores 2 ou 8 esperados.
- Isso ocorre porque todas as funções referenciam a mesma variável 'i', que já foi incrementada até 10.

Solução comum:
- Usar 'let' para declarar 'i' no loop, pois 'let' tem escopo de bloco e cria uma nova variável para cada iteração.
*/
