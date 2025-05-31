/* 01)​ Crie uma função que dado dois valores (passados como parâmetros)
 mostre no console a soma, subtração,multiplicação e divisão desses valores*/

 let dados = {
    x: 5,
    y: 5,
    z: 1, // 1 = soma, 2 = subtracao, 3 = divisao, 4 = multiplicacao
 };

 function calculadora(x = 0, y = 0, z = 1) {
    if (z == 1) {
        return console.log(x + y);
    } else if(z == 2) {
        return console.log(x - y);
    } else if(z == 3) {
        return console.log(x / y);
    } else if(z == 4) {
        return console.log(x * y);
    } else {
        console.log(`Valor definido de ${z} nao compativel (1 = soma, 2 = subtracao, 3 = divisao, 4 = multiplicacao)`)
    }
 };

 calculadora(dados.x, dados.y, dados.z)