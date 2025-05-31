// Criando um objeto pessoa com propriedade nome
const pessoa = { nome: "joao" }; // pessoa aponta para um endereço na memória que guarda esse objeto

// Alterando a propriedade nome do objeto referenciado por pessoa
pessoa.nome = "pedro"; // Podemos mudar propriedades internas normalmente, pois o objeto é mutável

console.log("Depois de alterar propriedade:", pessoa); // { nome: "pedro" }

// Tentando substituir o objeto inteiro pessoa (reassign) – NÃO FUNCIONA porque pessoa é const
// pessoa = { nome: "ana" }; // ERRO: Assignment to constant variable

// Congelando o objeto pessoa para impedir alterações nas suas propriedades
Object.freeze(pessoa); // Após freeze, não é possível mudar, adicionar ou remover propriedades

// Tentando alterar propriedade após congelar o objeto
pessoa.nome = "Maria"; // Essa operação será ignorada (sem efeito), pois o objeto está congelado

console.log("Depois de tentar alterar após freeze:", pessoa); // Continua { nome: "pedro" }

// Criando um novo objeto já congelado e atribuindo a uma constante
const pessoaConstante = Object.freeze({ nome: "joao" });

// Imprimindo o objeto congelado
console.log("Objeto congelado criado direto:", pessoaConstante); // { nome: "joao" }

// Resumo importante:
// - `const` impede reatribuição da     
// - `Object.freeze()` torna o objeto imutável, não permitindo mudanças em suas propriedades.
// - Freeze é superficial: objetos internos podem ainda ser mutáveis (deep freeze precisa ser feita manualmente).
