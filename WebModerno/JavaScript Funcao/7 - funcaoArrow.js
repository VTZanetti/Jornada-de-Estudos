// ---------- Função tradicional ----------
let dobro = function (a) {
    return 2 * a;
};

// ---------- Refatoração para Arrow Function (forma 1) ----------
dobro = (a) => {
    return 2 * a;
};

// ---------- Forma mais reduzida: retorno implícito ----------
dobro = a => 2 * a; // Parênteses e 'return' são opcionais se houver só 1 parâmetro e 1 expressão

console.log(dobro(Math.PI)); // Saída: 6.283185307179586

// ---------- Função tradicional ----------
let ola = function () {
    return "Ola";
};

// ---------- Versão com arrow function ----------
ola = () => "Ola"; // Sem parâmetros, usa-se () para indicar função sem argumentos

// ---------- Outra forma com um parâmetro (usando underline como argumento "não utilizado") ----------
ola = _ => "ola"; // Mesmo que não use o argumento, ele precisa ser declarado para usar essa forma

console.log(ola()); // Saída: "ola"

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 **Arrow Functions (funções seta)** são uma forma mais enxuta e moderna de declarar funções em JavaScript (introduzidas no ES6).

✔ Benefícios:
- Sintaxe curta e clara
- Retorno implícito (sem necessidade de `return` e `{}` quando se retorna uma única expressão)
- `this` é **lexicamente vinculado**, ou seja, mantém o `this` do contexto onde foi criada (ótimo para evitar bugs)

🔸 Dicas práticas:
- Se a função tem **1 parâmetro**, você pode omitir os parênteses.
- Se o corpo da função tem **apenas 1 expressão**, você pode omitir `{}` e `return`.

📌 Atenção:
- Arrow functions **não** são apropriadas como métodos de objetos se você precisa do `this`, pois o `this` nelas é fixado no contexto onde foram definidas (não no objeto).
- Usar `_` como nome de parâmetro é uma convenção comum para indicar que o argumento **não será usado**.
*/
