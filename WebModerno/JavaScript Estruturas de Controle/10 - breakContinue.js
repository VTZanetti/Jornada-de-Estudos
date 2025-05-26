const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------- FOR...IN COM BREAK ----------
for (let x in nums) {
    if (x == 5) break; // Interrompe o loop quando o índice for 5
    console.log(`${x} = ${nums[x]}`);
};

console.log("=========");

// ---------- FOR...IN COM CONTINUE ----------
for (let x in nums) {
    if (x == 5) continue; // Pula a iteração quando o índice for 5
    console.log(`${x} = ${nums[x]}`);
};

// ---------- BREAK COM RÓTULO (LABEL) ----------
externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo; // Sai dos dois loops quando a == 2 e b == 3
        console.log(`Par = ${a}, ${b}`);
    };
};

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 `for...in` percorre os **índices** do array (como strings).
    ➤ Então `x` será "0", "1", ..., até o último índice do array.

🔹 `break`: 
    - Encerra o loop imediatamente ao encontrar a condição.
    - No primeiro exemplo, a repetição para quando `x == 5`, ou seja, no 6º elemento (índice 5).

🔹 `continue`:
    - Pula a iteração atual e passa para a próxima.
    - No segundo exemplo, quando `x == 5`, o número na posição 5 não é exibido (valor 6).

🔹 `break` com rótulo (`label:`):
    - Permite **sair de múltiplos loops aninhados**.
    - Sem o `label`, o `break` sairia apenas do `for interno`.
    - O `label` `externo:` força a saída do loop externo ao encontrar a condição.

⚠️ CUIDADO:
- Labels são raramente usados na prática e podem deixar o código menos legível.
- Prefira refatorar em funções se a lógica ficar complexa demais.

💡 DICAS:
✔ Use `break` e `continue` com moderação e clareza — facilitam o controle, mas podem dificultar a leitura se usados em excesso.

✔ Em loops aninhados, evite o uso de labels quando possível — funções auxiliares são mais recomendadas.

✔ Se estiver usando `for...in` com arrays, lembre-se: `x` é uma **string**, então:
    ➤ Comparações como `x == 5` funcionam por coerção implícita
    ➤ Melhor: `Number(x) === 5` para evitar confusão
*/
