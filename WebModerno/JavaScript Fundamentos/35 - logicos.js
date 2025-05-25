// Introdução:
// Este código define uma função chamada 'compras' que simula decisões baseadas na realização de dois trabalhos.
// Dependendo se cada trabalho foi concluído (valores booleanos), decide-se se a família irá comprar sorvete, TVs de diferentes tamanhos ou se manterá saudável.

function compras(trabalho1, trabalho2) {
    // Se qualquer um dos trabalhos for verdadeiro, compra sorvete (operador OU)
    const comprarSorvete = trabalho1 || trabalho2;

    // Só compra a TV de 50 polegadas se ambos os trabalhos forem verdadeiros (operador E)
    const comprarTv50 = trabalho1 && trabalho2;

    // Compra a TV de 32 polegadas se apenas um dos trabalhos for verdadeiro (operador OU exclusivo simulando com diferente !=)
    const comprarTv32 = trabalho1 != trabalho2;

    // Se não comprar sorvete, mantém-se saudável (negação do resultado de comprarSorvete)
    const manterSaudavel = !comprarSorvete;

    // Retorna um objeto com os resultados das decisões
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

// Testando todas as combinações possíveis de trabalho1 e trabalho2

console.log(compras(true, true));
// Ambos os trabalhos feitos: compra sorvete, TV de 50, não TV de 32 e não se mantém saudável.

console.log(compras(true, false));
// Apenas o trabalho1 feito: compra sorvete, não TV de 50, compra TV de 32 e não se mantém saudável.

console.log(compras(false, true));
// Apenas o trabalho2 feito: compra sorvete, não TV de 50, compra TV de 32 e não se mantém saudável.

console.log(compras(false, false));
// Nenhum trabalho feito: não compra sorvete, não compra nenhuma TV e se mantém saudável.

// Notas finais:
// - O operador '||' (OU) retorna true se qualquer um dos operandos for verdadeiro.
// - O operador '&&' (E) retorna true somente se ambos forem verdadeiros.
// - O operador '!=' é usado aqui para simular um OU exclusivo, retornando true quando apenas um dos operandos é true.
// - A negação '!' inverte o valor booleano, usada para determinar se vai manter a saúde ao não comprar sorvete.
// - Retornar um objeto facilita visualizar todas as decisões em conjunto.
