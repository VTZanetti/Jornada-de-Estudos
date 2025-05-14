function sempreRetornaUm () {
return 1;
}

function textoOuNumero (retornaTexto) {
        return retornaTexto ? "sou um texto!" : 123;
       }

let valor = sempreRetornaUm();

console.log(valor)

let texto = textoOuNumero(true);
console.log(texto);