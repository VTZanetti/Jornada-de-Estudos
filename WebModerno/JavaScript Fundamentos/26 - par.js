// Par nome/valor é um conceito fundamental em JavaScript. 
// Consiste em associar um nome (identificador) a um valor, formando um par.

// Declarando uma constante chamada 'saudacao' no contexto léxico 1 (fora de funções ou blocos)
const saudacao = "Opa"; // contexto léxico 1

// Exibindo o valor da constante 'saudacao'
console.log(saudacao); // Saída: Opa

// Criando uma função chamada 'exec'
function exec() {
    // Declarando uma constante 'saudacao' no contexto da função (contexto léxico 2)
    const saudacao = "Falaaaaa"; 
    return saudacao; // Retorna o valor da saudação dentro da função
};

// Objetos são conjuntos organizados de pares nome/valor
// Criando um objeto chamado 'cliente' com várias propriedades
const cliente = {
    nome: "Pedro",              // nome -> valor "Pedro"
    idade: 32,                  // idade -> valor 32
    peso: 90,                   // peso -> valor 90
    endereco: {                 // endereco é outro objeto (objeto dentro de objeto)
        logradoura: "Rua Muito legal", // logradoura -> valor "Rua Muito legal"
        numero: 123                     // numero -> valor 123
    }
};

// Exibindo a constante 'saudacao' do contexto global
console.log(saudacao); // Saída: Opa

// Chamando a função 'exec' que retorna a saudação do contexto da função
console.log(exec()); // Saída: Falaaaaa

// Exibindo todo o objeto 'cliente' com suas propriedades e valores
console.log(cliente); 
/* Saída:
{
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: { logradoura: 'Rua Muito legal', numero: 123 }
}
*/

// Observação:
// - Contexto léxico significa onde sua variável foi definida fisicamente no código.
// - Uma variável declarada fora de uma função tem escopo global (no arquivo).
// - Variáveis dentro de funções têm escopo local àquela função.
