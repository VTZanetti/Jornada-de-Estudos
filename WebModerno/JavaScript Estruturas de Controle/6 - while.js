// Função que retorna um número inteiro aleatório entre 'min' (inclusivo) e 'max' (exclusivo)
function aleatorio(min, max) {
    let numero = Math.random() * (max - min) + min;
    return Math.floor(numero); // Arredonda para baixo e remove as casas decimais
}

// Inicializa a variável 'opcao' com 0
let opcao = 0;

// Loop while: executa o bloco enquanto a condição (opcao != -1) for verdadeira
while (opcao != -1) {
    opcao = aleatorio(-1, 10); // Sorteia um número entre -1 e 9 (inclusive -1, exclusivo 10)
    console.log(`Opcao sorteada foi ${opcao}`);
}

console.log("Finalizado");

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔢 A função aleatorio(min, max) utiliza:
    - Math.random(): gera um número decimal entre 0 (inclusive) e 1 (exclusivo)
    - Multiplicando por (max - min) e somando min → gera um número entre min e max
    - Math.floor(): arredonda para baixo, convertendo para número inteiro

🎯 Exemplo prático:
    ➤ aleatorio(-1, 10) pode gerar qualquer número inteiro entre -1 e 9.

🔁 O `while` verifica a condição **antes** de executar o bloco:
    - Se a variável `opcao` for diferente de -1, o loop continua.
    - Quando `opcao` for igual a -1, o laço para e imprime "Finalizado".

📌 A execução termina aleatoriamente, já que -1 pode ser sorteado a qualquer momento.

✅ Boas práticas aplicadas:
- Uso de `let` para declarar `numero` → evita criação de variável global.
- Código limpo e claro, ideal para simulações simples ou loops baseados em eventos aleatórios.

💡 DICA EXTRA:
Se quiser incluir o valor máximo no sorteio, altere a função para:
    Math.floor(Math.random() * (max - min + 1) + min)
Isso incluirá tanto `min` quanto `max` no intervalo de possíveis resultados.
*/
