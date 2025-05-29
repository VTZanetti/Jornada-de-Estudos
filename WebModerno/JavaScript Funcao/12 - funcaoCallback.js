const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// ✅ SEM CALLBACK: usando `for...in` e push manual
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]); // adiciona apenas as notas menores que 7
    }
}
console.log("Notas baixas 1 (sem callback):", notasBaixas1); // [6.5, 5.2, 3.6]

// ➕ Adicionando mais notas
notas.push(2); // adiciona nota 2 no final do array

// ✅ COM CALLBACK: usando `filter()` com função tradicional
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7; // filtra apenas as notas menores que 7
});
console.log("Notas baixas 2 (com callback tradicional):", notasBaixas2); // [6.5, 5.2, 3.6, 2]

// ➕ Adicionando mais notas
notas.push(3, 4); // adiciona as notas 3 e 4

// ✅ COM CALLBACK: usando `filter()` com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log("Notas baixas 3 (com arrow function):", notasBaixas3); // [6.5, 5.2, 3.6, 2, 3, 4]

/*
📘 EXPLICAÇÃO DIDÁTICA:

🌀 `.filter()` é um método que cria um **novo array** apenas com os elementos que **passam** em um determinado teste (retornam `true`).

📌 FORMATO:
```javascript
array.filter(function(elemento) {
    return condição;
});
✅ BENEFÍCIOS DO filter():

    Código mais legível e enxuto

    Evita manipulação manual do array (como .push() em laços)

    Permite separar lógica de filtragem em funções reutilizáveis

💡 DICA: Use filter() quando quiser extrair uma subconjunto de dados com base em uma condição lógica.

*/