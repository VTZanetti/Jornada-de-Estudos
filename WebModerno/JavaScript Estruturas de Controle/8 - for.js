// ---------- WHILE ----------
let contador = 1;

// Estrutura de repetição while: executa enquanto a condição for verdadeira
while (contador <= 10) {
    console.log(`WHILE contador = ${contador}`);
    contador++; // incrementa o contador em 1 a cada interação
}

// ---------- FOR ----------
for (let i = 1; i <= 10; i++) {
    // O 'for' é ideal quando já sabemos o número de repetições
    console.log(`FOR contador = ${i}`);
}

// ---------- FOR COM ARRAYS ----------
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Percorre o array de notas usando índice de 0 até o tamanho do array - 1
for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`);
}

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔁 WHILE:
- Usado quando **não sabemos exatamente** quantas vezes o loop vai repetir.
- A condição é verificada **antes** de cada iteração.

🔁 FOR:
- Usado quando sabemos **exatamente quantas vezes** o laço deve rodar.
- A estrutura já contém a inicialização (`let i = 1`), condição (`i <= 10`) e incremento (`i++`).

🔁 FOR COM ARRAY:
- Ideal para percorrer todos os elementos de um array com base no seu índice.
- `notas.length` retorna a quantidade de elementos no array, evitando erro de limite.

💡 DICAS EXTRAS:

✔ Evite deixar o incremento (`contador++`) de fora do `while`, pois pode causar loops infinitos.

✔ Em arrays, se não precisar do índice, considere usar `for...of`:
    for (let nota of notas) {
        console.log(nota);
    }

✔ Use `for...in` se quiser percorrer os índices de objetos ou arrays:
    for (let i in notas) {
        console.log(i, notas[i]);
    }
*/
