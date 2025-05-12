function sempreRetornaUm () {
return 1;
}

function textoOuNumero (retornaTexto) {
    if(retornaTexto){
        return "Sou um texto!";
       } else {
            return 123;
        }
    }

let valor = sempreRetornaUm();

console.log(valor)

let texto = textoOuNumero(true);
console.log(texto);