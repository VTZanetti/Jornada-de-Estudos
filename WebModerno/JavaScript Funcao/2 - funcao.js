// Contexto:
// Esta função calcula a área de um retângulo dado largura e altura.
// Se a área for maior que 20, exibe mensagem de alerta no console.
// Se não, retorna o valor da área.

// Pontos importantes:
// - Se faltar algum parâmetro, resultado pode ser NaN (não é número).
// - Se área > 20, função não retorna nada (undefined).
// - Parâmetros extras são ignorados.

// Função original:
function area(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
        // Sem return aqui, retorna undefined nesse caso
    } else {
        return area; // Retorna área se <= 20
    }
}

console.log(area(2, 2));            // 4
console.log(area(2));               // NaN (altura undefined)
console.log(area());                // NaN (largura e altura undefined)
console.log(area(2, 3, 17, 22, 44)); // 6 (só usa os dois primeiros)
console.log(area(5, 5));            // Imprime mensagem e retorna undefined


// Notas finais:
// - Em JS, parâmetros faltando são undefined, o que pode gerar NaN em cálculos.
// - Evitar funções que misturam console.log e retorno, para clareza.
// - Melhor usar valores padrão para evitar NaN e sempre retornar algo.

// Versão melhorada com parâmetros padrão e retorno consistente:
function areaMelhorada(largura = 0, altura = 0) {
    const area = largura * altura;

    if (area > 20) {
        return `Valor acima do permitido: ${area}m2.`;
    } else {
        return area;
    }
}

console.log(areaMelhorada(5, 5));  // "Valor acima do permitido: 25m2."
console.log(areaMelhorada(2, 2));  // 4
console.log(areaMelhorada());      // 0, evita NaN
