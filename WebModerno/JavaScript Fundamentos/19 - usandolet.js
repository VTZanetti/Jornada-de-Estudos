// Exemplo com let, mostrando o comportamento de escopo de bloco

let numero = 1; // Declara uma variável 'numero' no escopo externo (global no script)

{
    let numero = 2; // Declara uma nova variável 'numero', mas ela só existe dentro deste bloco
    console.log("dentro =", numero); // Saída: dentro = 2 (usa o valor da variável dentro do bloco)
}

console.log("fora =", numero); // Saída: fora = 1 (usa o valor da variável fora do bloco, que não foi alterado)


// Segundo exemplo, mostrando que uma variável declarada dentro do bloco não afeta nem é acessível fora dele

let numero2 = 1; // Declara 'numero2' no escopo externo

{
    let numero = 2; // Declaração de uma variável 'numero' dentro do bloco, totalmente independente de 'numero2'
    console.log("dentro =", numero2); // Saída: dentro = 1 (acessa corretamente 'numero2', que está fora do bloco)
}

console.log("fora =", numero2); // Saída: fora = 1 (valor de 'numero2' continua o mesmo)
