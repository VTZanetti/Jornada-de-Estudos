const numeros = [10, 20, 30, 40, 50, 60];

function praCadaElemento(elemento, indice, array) {
   console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento)

console.log("")

numeros.forEach(function (_, indice, _){ // elemento, indice, array
   console.log(indice)
})
// numeros.forEach(function(){
//    console.log("dentro do forEach!")  
// });

// for(let n of numeros) {
//     console.log(n);
// }

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }