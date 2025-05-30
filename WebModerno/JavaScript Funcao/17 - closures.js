// Closure conceito -> é o escopo criado quando uma função é declarada
// Esse escopo permite à função acessar e manipular variáveis externas à função

// Contexto léxico em ação!!!

const x = "Global"; // variável no escopo global

function fora () {
    const x = "Local"; // variável no escopo da função 'fora'

    function dentro() {
        return x; // acessa a variável 'x' do escopo em que foi definida (função 'fora')
    };

    return dentro; // retorna a função 'dentro' sem executá-la ainda
};

const minhaFuncao = fora(); // 'minhaFuncao' agora contém a função 'dentro' com o escopo fechado da função 'fora'
console.log(minhaFuncao()); // saída: "Local"

/*
📘 EXPLICAÇÃO DIDÁTICA:

🔹 O conceito de **closure** é fundamental em JavaScript. Ele ocorre quando uma função 
é capaz de "lembrar" do ambiente onde foi criada, mesmo após esse ambiente já ter sido 
encerrado (como o término da execução de `fora()`).

🔹 No exemplo acima, a função `dentro` é retornada por `fora` e atribuída à constante 
`minhaFuncao`. Quando executamos `minhaFuncao()`, a função ainda tem acesso à variável `x`
definida em `fora()` — isso é o closure em ação!

📌 DICA:
Closures são amplamente usados em JavaScript, especialmente em:
- Funções que retornam outras funções
- Callbacks com estado preservado
- Criação de funções com escopos privados
*/
