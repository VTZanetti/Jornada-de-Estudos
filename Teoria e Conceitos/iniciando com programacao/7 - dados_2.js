// Anatomia da variavel
// Var/let identificador = valor
// var/let idade = 33
let preco = 19.90; // 19,90 reais
let desconto = 0.4; // 40%
let precoComDesconto = (preco * (1 - desconto));
let precoComDesconto2 = (preco - preco * desconto)
console.log(precoComDesconto); // usando a logica de preco * (1 - desconto)
console.log(precoComDesconto2); // usando a logica de preco - preco * desconto

let nome = "Caderno" // string (texto) -> sequencia de simbolos/letras
let categoria = "Papelaria"

console.log(
    "Produto: " + nome 
    + ", constado na categoria: " + categoria
    + ", preco: " + preco
    + ", desconto: " + desconto*100 + "%"
    + ", valor com desconto: " + precoComDesconto + "BRL"
);