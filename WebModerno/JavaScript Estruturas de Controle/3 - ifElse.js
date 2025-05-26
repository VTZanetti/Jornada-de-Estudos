// Declaração de uma função anônima atribuída à constante imprimirResultado
const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Chamadas de teste:
imprimirResultado(10);      // Saída: Aprovado (10 >= 7)
imprimirResultado(4);       // Saída: Reprovado (4 < 7)
imprimirResultado("Epa!");  // Saída: Reprovado (veja explicação abaixo)

/*
🧠 EXPLICAÇÃO CORRIGIDA:

No caso de `imprimirResultado("Epa!")`, acontece o seguinte:

1️⃣ A função recebe uma **string** como argumento, não um número.
2️⃣ A comparação `nota >= 7` força o JavaScript a tentar **converter** a string para número.
3️⃣ Como "Epa!" não pode ser convertido para um número válido, o resultado é `NaN` (Not a Number).
4️⃣ Qualquer comparação com `NaN` (inclusive `NaN >= 7`) resulta em **false**.
5️⃣ Por isso, o bloco `else` é executado, e o console exibe: `Reprovado`.

✅ Conclusão: **"Epa!" gera "Reprovado"** porque a conversão falha e a comparação resulta em `false`.

🔒 BOA PRÁTICA: sempre validar o tipo do dado antes de usar:

*/

const imprimirResultadoSeguro = function(nota) {
    if (typeof nota !== "number") {
        console.log("Nota inválida!");
        return;
    }

    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Testes mais seguros:
imprimirResultadoSeguro(10);     // Aprovado
imprimirResultadoSeguro(4);      // Reprovado
imprimirResultadoSeguro("Epa!"); // Nota inválida!

/*
💡 DICA FINAL:
JavaScript realiza coerção implícita de tipos (type coercion),
então sempre que houver comparação de valores vindos de fora,
verifique o tipo com `typeof` ou use funções como `Number()` para converter de forma segura.
*/
