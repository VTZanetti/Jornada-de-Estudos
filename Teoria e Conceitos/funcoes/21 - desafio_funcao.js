// verificacao de nota

var aprovacao = function (nota, aluno) {
    nota = Math.ceil(nota)
    if (nota <= 10 && nota >= 7){
        console.log(`${aluno} esta aprovado com exelencia`)}
    else if (nota <= 6.99 && nota >= 5){
        console.log(`${aluno} esta aprovado na media`)}
    else if (nota <= 4.99 && nota >= 3.5){
        console.log(`${aluno} esta em recuperacao`)}
    else {
        console.log(`${aluno} esta reprovado na materia`)
        }
}

// chamar aprovacao do formato NOTA, "NOME DO ALUNO " // o NOME TEM QUE SER DEFINIDO COMO STRING
// exemplo aprovacao(10, "Vitor")

aprovacao( 6, "vitor")