let comparaComThis = function(param) {
    console.log(this === param);
};

comparaComThis(global); // true em ambiente Node.js, pois fora de uma função o `this` é `global` (ou `globalThis`)

// Criamos um novo objeto
const obj = {};

// A função agora é explicitamente ligada ao `obj` usando bind
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global); // false: agora `this` está vinculado a `obj`
comparaComThis(obj);    // true: `this` foi fixado em `obj`

// Agora, uma função arrow
let comparaComThisArrow = param => console.log(this === param);

// No contexto do módulo Node.js, `this` dentro de arrow function aponta para `module.exports`
comparaComThisArrow(global);          // false
comparaComThisArrow(module.exports);  // true

// Tentamos "bindar" a arrow function a um novo objeto
comparaComThisArrow = comparaComThisArrow.bind(obj);

// Mesmo com bind, o `this` não muda em arrow functions!
comparaComThisArrow(obj); // Ainda será false!

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 Funções tradicionais (`function`) têm seu próprio `this` dinâmico, que depende de como a função é chamada.
    - Por isso, podemos usar `.bind()`, `.call()` ou `.apply()` para mudar seu `this`.

🔹 Arrow functions (`=>`) NÃO possuem seu próprio `this`. 
    - Elas herdam o `this` do contexto em que foram definidas.
    - O `.bind()` **não afeta** arrow functions!

✔ RESUMO:

| Tipo de função       | `this` pode ser alterado com `.bind()`? | Herda `this` do contexto externo? |
|----------------------|------------------------------------------|-----------------------------------|
| Função tradicional   | ✅ Sim                                   | ❌ Não                            |
| Arrow function       | ❌ Não                                   | ✅ Sim                            |

💡 DICA:
Use arrow functions quando quiser manter o `this` do contexto onde a função foi definida — especialmente útil em callbacks.

*/
