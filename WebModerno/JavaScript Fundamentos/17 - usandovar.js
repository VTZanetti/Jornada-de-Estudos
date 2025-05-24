// Demonstração de escopo com 'var'

// Quando uma variável é declarada com 'var' dentro de blocos ({}),
// ela NÃO respeita o escopo de bloco, apenas o escopo de função ou global.

{
    {
        {
            {
                {
                    var sera = "Sera???"; // Variável declarada com 'var'
                    console.log(sera); // Acessível aqui dentro
                }
            }
        }
    }
}

console.log(sera); // Também é acessível aqui fora, pois 'var' não tem escopo de bloco

// Demonstração de escopo de função
function teste() {
    var local = 123; // Variável com 'var' dentro da função
    console.log(local); // Acessível dentro da função
}

teste();

// console.log(local); // Erro: local is not defined
// Aqui gera erro porque 'var' dentro de função tem escopo restrito à função