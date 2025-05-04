// PI * RAIO * RAIO / formula da area
// o valor precisa ser o resultado com a explicacao de um string
let raio = 10;
const pi = 3.14;
let area = (pi * (raio * raio));

console.log("O valor da area de um circulo com o raio " + raio + "m eh de " + area + "m2");
console.log(Math.PI); // disponivel para ter um PI mais ACERTIVO

area = (Math.PI *(raio*raio));

console.log
(
    "O valor mais preciso da area usando o valor de pi mais acertivo eh de " 
    + area 
    + "m2"
);