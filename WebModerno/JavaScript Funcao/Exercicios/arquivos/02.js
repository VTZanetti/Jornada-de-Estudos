/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

let triangulo = {
    equilatero: {
        x: 1,
        y: 1,
        z: 1,
    },
    isosceles: {
        x: 1,
        y: 1,
        z: 2,
    },
    escaleno: {
        x: 1,
        y: 2,
        z: 3,
    }
};

var resultado = "";

function definirTriangulo(x = 0,y = 0,z = 0) {
    if (x == 0 || y == 0 || z == 0) {
        return 'Nao eh possivel fazer pois falta medidas no triangulo'
    }
    else if (x == y && x == z){
      return  resultado = "Equilatero"
    } else if (x == y || x == z || z == y) {
        return resultado = "Isosceles"
    } else if (x != y && x != z && z != y){
        return resultado = "Escaleno"
    } else {
        return resultado = "MEDIDAS ERRADAS!!!"
    }
};

console.log(definirTriangulo(1,3,));