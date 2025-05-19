function executar(fn, n1, n2) {
    if(typeof fn === "function") {
        console.log(fn(n1, n2))
    } else {
        console.log( " NAO EH UMA FUNCAO VALIDA")
    }
}

function somar(a, b) {
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function divisao(a, b){
    return a / b;
}
function multiplicacao(a,b) {
    return a * b;
}

executar(multiplicacao, 50, 50)
executar(somar, 30, 30)
executar(subtrair, 30, 90)
executar(divisao, 200, 40)