// Declara uma variável local ao módulo (não é acessível fora deste arquivo)
let a = 3;

// Cria uma propriedade global no Node.js (acessível de qualquer lugar)
global.b = 123;

// Adiciona propriedades ao objeto 'this', que em Node.js é igual a 'module.exports'
this.c = 456;
this.d = false;

// Atribui um novo valor à propriedade 'c' (sobrescrevendo o valor anterior)
this.c = "Teste";  // Agora this.c vale "Teste" em vez de 456

// Exibe a variável local 'a' (funciona normalmente)
console.log(a);  // Saída: 3

// Tenta acessar 'a' através do escopo global (não funciona pois 'a' é local)
console.log(global.a);  // Saída: undefined

// Acessa 'c' através do objeto 'this' (equivalente a module.exports neste contexto)
console.log(this.c);  // Saída: "Teste"

// Acessa 'c' diretamente pelo objeto de exportação do módulo
console.log(module.exports.c);  // Saída: "Teste"

// Verifica se 'this' e 'module.exports' são a mesma coisa (true em Node.js)
console.log(module.exports === this);  // Saída: true

// Mostra o que está sendo exportado por este módulo
console.log(module.exports);  // Saída: { c: 'Teste', d: false }

// ===== IMPORTANTE =====
// Se você fizer isso:
// abc = 3;
// Estará criando uma variável global de forma implícita (sem let/const/var)
// Isso é uma MÁ PRÁTICA! Evite sempre que possível.
// Abaixo, como a linha está comentada, a variável global 'abc' não existe:
console.log(global.abc);  // Saída: undefined

/*
💡 DICAS DIDÁTICAS:
- Use SEMPRE let, const ou var para declarar variáveis — evite criar globais acidentalmente.
- No Node.js, 'this' no escopo do módulo é igual a 'module.exports'.
- Para exportar dados de um módulo, adicione ao 'module.exports' ou 'this'.
- Evite usar 'global' a menos que realmente precise de variáveis acessíveis em qualquer lugar.

🔁 EXEMPLO DE EXPORTAÇÃO CORRETA:
module.exports = {
  nome: "João",
  idade: 30
};

🔁 EXEMPLO DE IMPORTAÇÃO EM OUTRO ARQUIVO:
const pessoa = require('./arquivo');
console.log(pessoa.nome); // João
*/
