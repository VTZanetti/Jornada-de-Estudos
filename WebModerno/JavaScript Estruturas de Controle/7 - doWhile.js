// Função que retorna um número inteiro aleatório entre 'min' (inclusivo) e 'max' (exclusivo)
function aleatorio(min, max) {
    let numero = Math.random() * (max - min) + min; // Gera número decimal entre min e max
    return Math.floor(numero); // Arredonda para baixo para obter um número inteiro
}

// Inicializa a variável com 0
let opcao = 0; // Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:
//somente iniciada a variável, sem valor inicial!


// Estrutura do...while garante que o bloco será executado ao menos uma vez, 
do {
    opcao = aleatorio(-1, 10); // Gera números inteiros entre -1 e 9
    console.log(`Opcao sorteada foi ${opcao}`);
} while (opcao != -1); // Encerra somente quando o valor sorteado for -1

console.log("Finalizado");

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔁 `do...while` é semelhante ao `while`, mas com uma diferença essencial:
    ➤ Ele executa o bloco **antes de verificar** a condição.
    ➤ Isso garante pelo menos **uma execução**, mesmo que a condição já seja falsa no início.

🎲 A função `aleatorio(min, max)` utiliza:
    - `Math.random()` para gerar número decimal entre 0 e 1 (exclusivo)
    - Multiplica por `(max - min)` e soma `min` → gera valor entre `min` e `max` (exclusivo)
    - `Math.floor()` transforma esse número em inteiro

✅ CORREÇÃO BOA PRÁTICA:
function aleatorio(min, max) {
    let numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

💡 DICAS EXTRAS:
- Para incluir o valor máximo no sorteio (ex: permitir 10), use:
    Math.floor(Math.random() * (max - min + 1) + min);

- Sempre declare variáveis com `let`, `const` ou `var` para evitar poluição do escopo global.
*/
