// Função que imprime o conceito da nota com base em uma estrutura switch-case
const imprimirNota = function (nota) {
    // Math.floor(nota) arredonda a nota para baixo (ex: 9.8 vira 9, 6.5 vira 6)
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra");
            break; // interrompe a execução do switch após encontrar o caso
        case 8:
        case 7:
            console.log("Aprovado");
            break;
        case 6:
        case 5:
        case 4:
            console.log("Recuperacao");
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado");
            break;
        default:
            console.log("nota invalida"); // qualquer valor fora de 0 a 10
    }
};

// Testes com diferentes valores de nota:
imprimirNota(10);   // Quadro de Honra (Math.floor(10) = 10)
imprimirNota(9.1);  // Quadro de Honra (Math.floor(9.1) = 9)
imprimirNota(6.5);  // Recuperacao (Math.floor(6.5) = 6)
imprimirNota(4.3);  // Recuperacao (Math.floor(4.3) = 4)
imprimirNota(2.1);  // Reprovado (Math.floor(2.1) = 2)
imprimirNota(0);    // Reprovado (Math.floor(0) = 0)
imprimirNota(-1);   // nota invalida
imprimirNota(11);   // nota invalida

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 O `switch` compara valores **estritamente (===)**, então é importante transformar a nota com `Math.floor()` 
    para garantir que estamos comparando com os números inteiros exatos.

🔹 `case` pode ser empilhado: ao omitir o `break`, vários valores podem levar ao mesmo bloco de código.

🔹 `default` é um fallback: ele será executado se nenhum `case` for compatível com o valor analisado.

💡 DICAS:

✔ Use `Math.floor()` para agrupar notas por faixa sem precisar checar intervalos exatos.
✔ Ideal para cenários em que valores inteiros padronizados determinam ações.
✔ Para comparações com faixas mais flexíveis (ex: de 7.0 a 8.99), use `if/else`.

⚠️ Cuidado com valores fora do intervalo esperado — aqui lidamos com eles no `default`, o que é essencial.
*/
