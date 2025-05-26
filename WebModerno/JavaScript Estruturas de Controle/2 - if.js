// Função teste1 verifica se o número é maior que 7.
// Se for, imprime o número. Independentemente disso, imprime "final".
function teste1(num) {
    if (num > 7) // sem chaves, apenas a primeira linha após o if é condicionada
        console.log(num);  // será executado apenas se num > 7

    console.log("final");  // sempre será executado, pois está fora do if
}

// Chamadas da função:
teste1(6);  // Saída: final (6 não é > 7, então só imprime "final")
teste1(8);  // Saída: 8 \n final (8 é > 7, então imprime os dois)

// ---------------------------------------------------------------------------

// Função teste2 tem um erro sutil: ponto e vírgula logo após o if
function teste2(num) {
    if (num > 7); { // <- esse ponto e vírgula FINALIZA o if, tornando o bloco abaixo sempre executado
        console.log(num); // isso será executado SEMPRE, independentemente da condição
    }
}

// Chamadas da função:
teste2(6);  // Saída: 6 (mesmo 6 não sendo > 7)
teste2(8);  // Saída: 8 (condizente com a condição, mas também afetada pelo erro)

// ---------------------------------------------------------------------------

/*
🧠 EXPLICAÇÃO DIDÁTICA:

1️⃣ No JavaScript, o uso do ponto e vírgula após a declaração do 'if' como:
    if (condição);  <-- ENCERRA o 'if' ali!
    {
        // este bloco será executado SEMPRE, pois não está mais condicionado
    }

2️⃣ O correto seria:
    if (condição) {
        // bloco de código executado apenas se a condição for verdadeira
    }

🔍 Exemplo corrigido da função teste2:
function teste2(num) {
    if (num > 7) {
        console.log(num);
    }
}

🔴 DICA IMPORTANTE:
Evite omitir chaves em estruturas condicionais, mesmo quando só há uma linha.
Isso evita erros sutis como esse e torna o código mais legível e seguro.

*/
