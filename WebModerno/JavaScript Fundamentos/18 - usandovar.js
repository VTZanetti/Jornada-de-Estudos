// Declaração de variável usando 'var'
var numero = 1;

{
    // Aqui estamos declarando novamente a variável 'numero' com 'var'
    // Como 'var' NÃO tem escopo de bloco, ela sobrescreve a variável 'numero' anterior
    var numero = 2;
    console.log("dentro =", numero); // Saída: dentro = 2
}

console.log("fora =", numero); // Saída: fora = 2
