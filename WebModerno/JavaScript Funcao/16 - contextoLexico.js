const valor = "Global"; // variável definida no escopo global

function minhaFuncao() {
    console.log(valor);   
    // Aqui o JS procura pela variável "valor" no escopo em que a função foi definida,
    // não onde ela foi chamada! Como "minhaFuncao" foi criada no escopo global,
    // ela acessa o "valor" global, mesmo sendo chamada dentro da função "exec".
};

function exec() {
    const valor = "Local"; // escopo local dentro da função "exec"
    minhaFuncao(); // chamando a função "minhaFuncao"
};

exec(); // saída: "Global"

/*
📘 EXPLICAÇÃO DIDÁTICA:

🔹 Quando uma função é definida, ela "leva junto" o seu *contexto léxico*, ou seja,
o escopo onde foi criada. No caso acima, `minhaFuncao` foi criada no escopo global,
então ela enxerga as variáveis definidas no escopo global, mesmo que seja chamada 
dentro de outro escopo (como dentro de `exec`).

🔹 O que *não* acontece:
A função *não* passa a "ver" as variáveis do escopo de quem a chamou (exec),
ela vê somente o escopo onde foi criada!

📌 DICA:
Esse comportamento é chamado de **escopo léxico**, e é fundamental para entender
como funciona closures, callbacks e outras estruturas mais avançadas em JavaScript.
*/
