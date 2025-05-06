// duas variaveis a = 7, b =94
let a = 7
let b = 94

// [a, b] = [b, a] 
// outra forma de conseguir
{ // ESSA FOI A MINHA RESOLUCAO CRIANDO UMA TERCEIRA VARIAVEL
  // COM A CONTA DA DIFERENCA DE B - A  
let c = b - a

console.log(c)
console.log(a + " valor de 1 A ");

a = b
b = a - c
} 
// depois da troca... a = 94 e b = 7
console.log(a + " valor de 2 A");
console.log(b + " valor de 2 B");