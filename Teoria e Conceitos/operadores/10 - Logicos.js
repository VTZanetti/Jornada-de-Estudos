let trabalho1 = true;
let trabalho2 = true;
let tv50= trabalho1 && trabalho2; // AND
let tv32= trabalho1 !== trabalho2; // XOR

console.log('Vamos comprar a tv de 50": ' + (tv50)); // AND
// console.log("Vamos comprar a tv de 50'"); // opostos para mostrar a '
console.log('Vamos comprar a tv de 32": ' + (tv32)); // XOR

let sorvete = trabalho1 || trabalho2; // OR
let ficaremcasa = !sorvete // NOT
console.log('Vamos comprar Sorvete:": ' + (sorvete));
console.log("Vamos ficar em casa? " + ficaremcasa)
