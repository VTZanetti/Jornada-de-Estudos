// Introdução:
// Este código exemplifica o uso do operador ternário em JavaScript para tomada de decisão simples.
// O operador ternário é uma forma enxuta de criar uma expressão condicional (if/else) em uma única linha.

// Operador Ternário:
// Sintaxe básica:
// condição ? valor_se_verdadeiro : valor_se_falso;

// Exemplo utilizando operador ternário:
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

// Testando a função com duas notas
console.log(resultado(8));    // Saída: "Aprovado" (porque 8 >= 7)
console.log(resultado(6.9));  // Saída: "Reprovado" (porque 6.9 < 7)


// ------------------------------------------------------------
// OUTRAS FORMAS DE FAZER A MESMA COISA SEM OPERADOR TERNÁRIO

// Forma utilizando if/else comum (mais verbosa, porém clara)
function resultadoIf(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(resultadoIf(8));    // Saída: "Aprovado"
console.log(resultadoIf(6.9));  // Saída: "Reprovado"


// Forma utilizando if/else simplificado
function resultadoSimplificado(nota) {
    let resposta = "Reprovado";
    if (nota >= 7) {
        resposta = "Aprovado";
    }
    return resposta;
}

console.log(resultadoSimplificado(8));    // Saída: "Aprovado"
console.log(resultadoSimplificado(6.9));  // Saída: "Reprovado"


// Forma utilizando operador lógico (menos convencional, mas possível)
function resultadoComLogico(nota) {
    return (nota >= 7 && "Aprovado") || "Reprovado";
    // Se (nota >= 7) for true, retorna "Aprovado"
    // Caso contrário, cai no || e retorna "Reprovado"
}

console.log(resultadoComLogico(8));    // Saída: "Aprovado"
console.log(resultadoComLogico(6.9));  // Saída: "Reprovado"


// ------------------------------------------------------------
// Notas finais:
// - O operador ternário é extremamente útil para condições simples onde você precisa escolher entre dois valores.
// - Se a lógica for mais complexa (várias condições ou ações), o uso de if/else tradicional traz mais clareza.
// - A escolha entre ternário e if/else depende de clareza, legibilidade e tamanho da condição.
// - Operadores lógicos como "&&" e "||" também podem ser usados criativamente para retornos condicionais, mas devem ser usados com cuidado para não prejudicar a legibilidade.
