// Função que retorna um número inteiro aleatório entre 'min' e 'max' (inclusive min, exclusivo max)
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); // arredonda para baixo para garantir um inteiro
}

// Inicializa a variável opcao
let opcao = 0;

// Enquanto a opção for diferente de -1, o laço continuará executando
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10); // sorteia um número entre -1 e 9
    console.log(`opcao escolhida foi ${opcao}.`);
}

console.log("Ate a proxima!");

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔢 Math.random() → Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
🔧 Para transformar esse número em algo dentro do intervalo desejado:
    ➤ Multiplica-se pela diferença (max - min) → gera um valor dentro do intervalo
    ➤ Soma-se o valor mínimo → desloca para começar do mínimo
    ➤ Usa-se Math.floor() → remove as casas decimais, pegando a parte inteira

🎯 Exemplo prático:
    getInteiroAleatorioEntre(-1, 10) pode retornar valores de -1 até 9.

🔁 O `while` continua executando enquanto a variável `opcao` for diferente de -1.
    Como -1 está dentro da faixa possível, o loop eventualmente para.

📌 Essa estrutura é útil para loops de tentativas onde o encerramento depende de sorte ou condição externa.

💡 DICA:
- Para incluir o valor máximo no intervalo (por exemplo, para permitir 10), use:
    Math.floor(Math.random() * (max - min + 1) + min);
    Assim, o intervalo passa a ser inclusivo em ambos os extremos.
*/
