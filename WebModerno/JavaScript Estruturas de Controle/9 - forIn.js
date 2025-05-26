// ---------- FOR...IN COM ARRAYS ----------
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// O loop for...in percorre os índices (chaves) do array
for (let i in notas) {
    console.log(i, notas[i]); // imprime o índice e o valor correspondente
}

// ---------- FOR...IN COM OBJETOS ----------
const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64,
};

// O loop for...in percorre as propriedades (chaves) do objeto
for (let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`); // imprime chave = valor
}

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔄 `for...in` → percorre as **chaves** de objetos ou os **índices** de arrays:
    ➤ No caso de arrays, `i` será o índice: 0, 1, 2, ...
    ➤ No caso de objetos, `i` será o nome da propriedade: "nome", "sobrenome", etc.

🔸 `notas[i]` → acessa o valor no índice i do array
🔸 `pessoa[i]` → acessa o valor da propriedade chamada i no objeto

💡 DICAS:

✔ `for...in` é excelente para objetos, mas em arrays **não é o mais recomendado** quando a ordem ou tipos especiais importam:
    - Pode percorrer propriedades herdadas se o array for modificado.
    - Para arrays, prefira `for...of` se quiser os valores diretamente:

    ```javascript
    for (let nota of notas) {
        console.log(nota);
    }
    ```

✔ Em objetos, `for...in` é perfeito para iterar por todas as propriedades enumeráveis.

⚠️ IMPORTANTE:
- `for...in` percorre chaves como strings, então evite operações aritméticas diretamente com `i` sem conversão.

🔍 EXTRAS:
- Para acessar todas as chaves de um objeto:
    Object.keys(pessoa);
- Para acessar os valores:
    Object.values(pessoa);
- Para pares chave-valor:
    Object.entries(pessoa);
*/
