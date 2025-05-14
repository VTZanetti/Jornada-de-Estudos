let ap;

function calculoAprovacao (n1, n2, n3, aluno) {
ap = ((n1 + n2 + n3)/3)
 if (ap <= 4.99) {
    console.log(`${aluno} esta REPROVADO`);
 } else {
    console.log(`${aluno} esta APROVADO`);
 }
}

calculoAprovacao (8, 3, 4, "Mateus");