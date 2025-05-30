// IIFE -> Immediately Invoked Function Expression
// (Função Invocada Imediatamente)

(function () {
    console.log("Sera executado na hora!");
    console.log("Foge do escopo mais abrangente");
})();

/*
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 Uma IIFE (Immediately Invoked Function Expression) é uma função anônima que é definida e **executada imediatamente** após sua declaração.

🔹 A sintaxe envolve envolver a função entre parênteses `(function() { ... })`
   e em seguida, os parênteses `()` para invocá-la imediatamente.

✅ VANTAGENS:
1. Evita poluir o escopo global.
2. Ideal para criar um **escopo isolado** (ex: em bibliotecas, blocos de código privados).
3. Protege variáveis internas de acessos externos.

📌 SAÍDA:
Sera executado na hora!  
Foge do escopo mais abrangente
*/
