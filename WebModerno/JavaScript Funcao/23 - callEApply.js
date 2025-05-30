function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

// Objeto com método que usa `this`
const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // associa a função ao objeto
};

// Atribuindo valores ao escopo global (Node.js)
global.preco = 20;
global.desc = 0.1;

console.log(getPreco()); // Usa `this` do escopo global → R$ 19.800000000000004
console.log(produto.getPreco()); // Usa `this` do objeto produto → R$ 3900.65

// Criando outro objeto
const carro = { preco: 49990, desc: 0.20 };

// call: executa função com `this` definido e argumentos separados
console.log(getPreco.call(carro)); // → R$ 39992

// apply: executa função com `this` e argumentos em array
console.log(getPreco.apply(carro)); // → R$ 39992

// call com parâmetros personalizados
console.log(getPreco.call(carro, 0.17, "$")); // → $ 46790.64

// apply com os mesmos parâmetros em array
console.log(getPreco.apply(carro, [0.17, "$"])); // → $ 46790.64

/*
🧠 RESUMO IMPORTANTE:

🔹 `this`: representa o contexto de onde a função está sendo executada.
🔹 `.call(thisArg, arg1, arg2...)`: executa com o `this` e argumentos passados separadamente.
🔹 `.apply(thisArg, [arg1, arg2...])`: mesma coisa, mas os argumentos vão em array.

📌 DICA:
Você usa `call` ou `apply` quando quer reutilizar uma função em diferentes objetos,
modificando o contexto (`this`) dinamicamente.
*/
