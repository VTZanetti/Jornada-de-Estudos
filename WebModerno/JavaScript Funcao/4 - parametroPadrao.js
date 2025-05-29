// Contexto:
// Este código mostra diferentes estratégias para definir valores padrão para parâmetros de funções em JavaScript.
// Isso é útil para evitar resultados indesejados quando argumentos não são passados ou são valores "falsy" (como 0, null, undefined).

// Estratégia 1: Usar operador lógico OR (||)
// Problema: se o argumento for falsy (ex: 0), ele será substituído pelo valor padrão, o que pode ser indesejado.
function soma1(a, b, c) {
    a = a || 1;  // Se a for falsy, assume 1
    b = b || 1;  // Mesmo para b
    c = c || 1;  // Mesmo para c
    return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));  
// Saída: 3 5 6 3
// Note que soma1(0,0,0) retornou 3 (1+1+1) porque 0 é falsy

// Estratégia 2, 3 e 4: Usar checagens explícitas
function soma2(a, b, c) {
    // Se a não for undefined, usa a; senão 1
    a = a !== undefined ? a : 1;

    // Se o índice 1 existir em arguments, usa b; senão 1
    b = 1 in arguments ? b : 1;

    // Se c não for número (NaN), usa 1; senão c
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));  
// Saída: 3 6 6 0
// Aqui soma2(0,0,0) retorna 0 pois 0 é válido e não substituído

// Estratégia 5 (ES2015): Usar valores padrão direto na assinatura da função
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));  
// Saída: 3 6 6 0
// Esta é a forma mais simples, moderna e recomendada para definir valores padrão.

// Notas finais:
// - Evite usar a estratégia 1 com || quando parâmetros podem ser 0 ou outros valores falsy que devem ser aceitos.
// - A forma ES2015 é a melhor prática para valores padrão pois é clara e evita erros comuns.
// - Use checagens explícitas quando precisar de lógica mais complexa para definir padrão.

