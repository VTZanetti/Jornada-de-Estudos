// Adiciona o método 'entre' ao protótipo de Number
// Isso permite que qualquer número use a sintaxe: numero.entre(inicio, fim)
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
    // 'this' aqui se refere ao número que está chamando o método
}

// Função que imprime o resultado de acordo com a faixa da nota
const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de Honra");  // Nota de excelência
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado");         // Nota acima da média
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperacao");      // Nota abaixo da média, mas com chance
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado");        // Nota muito baixa
    } else {
        console.log("Nota invalida");    // Valores fora da faixa 0-10
    }

    console.log("-------------"); // Separador visual entre os resultados
}

// Chamadas de teste:
imprimirResultado(10);    // Quadro de Honra
imprimirResultado(7.5);   // Aprovado
imprimirResultado(6.5);   // Recuperacao
imprimirResultado(3.90);  // Reprovado
imprimirResultado(-1);    // Nota invalida
imprimirResultado(11);    // Nota invalida

/*
🧠 EXPLICAÇÃO DIDÁTICA:

✔ Adicionar métodos ao prototype permite que todos os objetos daquele tipo tenham acesso à nova função.
  Aqui estamos estendendo o comportamento de 'Number', o que é poderoso, mas exige cuidado.

📌 'nota.entre(a, b)' é equivalente a 'nota >= a && nota <= b', 
    mas com sintaxe mais limpa e legível.

⚠️ ATENÇÃO:
Modificar protótipos de objetos nativos (como Number, String, Array) é permitido,
mas deve ser feito com critério, pois pode causar conflitos com bibliotecas externas 
ou com comportamentos futuros da linguagem.

✅ Neste caso, o uso foi bem aplicado para fins educacionais e tornou a lógica mais intuitiva.

💡 DICA EXTRA:
Se quiser evitar estender o prototype diretamente, pode criar uma função auxiliar:

function entre(valor, inicio, fim) {
    return valor >= inicio && valor <= fim;
}

E usar assim:
if (entre(nota, 7, 8.99)) { ... }

*/
