var ap;
function calculoMedia (n1, n2, n3, nome) {
    ap = Math.ceil((n1 + n2 + n3)/3)
    if (ap <= 6) {
        console.log(`O aluno ${nome} precisa de ${(7 - ap)} na recuperacao para passar`)
    } else {
        console.log(`O aluno ${nome} esta aprovado com a media ${ap}`)
    }
}
// para chamar a funcao (nota 1, nota 2, nota 3, nome do aluno) ela retornara se esta aprovado ou quanto precisa na recuperacao!!!
calculoMedia(7 , 6 , 8, "vitor")