// ----------------------------------------------
// #1 Função com parâmetros e com retorno
// ----------------------------------------------
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log("Resultado da soma (armazenado em variável):", resultado);

console.log("Resultado da soma (direto na função):", somar(30, 56));


// ----------------------------------------------
// #2 Função com parâmetros e sem retorno
// ----------------------------------------------
function exibirMultiplicacao(a, b) {
    console.log("Multiplicação:", a * b);
}

exibirMultiplicacao(30, 30);
exibirMultiplicacao(90, 3809);


// ----------------------------------------------
// #3 Função sem parâmetros e com retorno
// ----------------------------------------------
function retornaDataAtual() {
    return new Date();
}

console.log("Data atual:", retornaDataAtual());


// ----------------------------------------------
// #4 Função sem parâmetros e sem retorno
// ----------------------------------------------
function exibirHoraAtual() {
    console.log("Hora atual:", new Date().getHours());
}

exibirHoraAtual();
