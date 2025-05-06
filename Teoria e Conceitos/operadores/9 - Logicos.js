let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 - Vai pro shopping? "; // Caso AND
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);

let resultadoOu = "#2 - Vai pro shopping? "; // Caso OR
resultadoOu += estaEnsolarado || carroEstaNaGaragem;

console.log(resultadoOu);

console.log(true != true); 
console.log(true != false); 
console.log(false != true); 
console.log(false != false); 

console.log("Nao verdaidero:" + !true)
console.log("Nao falso:" +!false)