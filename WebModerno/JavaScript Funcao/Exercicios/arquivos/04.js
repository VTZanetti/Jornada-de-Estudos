/*
04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultadoe o resto da divisão destes dois valores.
*/

function divisao(x, y) {
    let resultado = x / y;
    let modulo = x % y;
    return `A divisao de ${x} dividido por ${y} deu ${resultado} e seu modulo foi de ${modulo}`;
};

console.log(divisao(2,4))