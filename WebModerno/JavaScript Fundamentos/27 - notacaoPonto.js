// ---- Trabalhando com a Biblioteca Math ----

// O objeto 'Math' é um objeto embutido no JavaScript que possui propriedades e métodos
// para constantes e funções matemáticas. Não é uma função construtora.
// 'Math.ceil()' é um método que arredonda um número para cima, para o próximo inteiro maior ou igual.
console.log(Math.ceil(6.1)); // Saída: 7
// Outros exemplos: Math.ceil(6.0) seria 6, Math.ceil(-6.1) seria -6.

// ---- Criando e Manipulando Objetos Literais ----

// 'obj1' é um objeto criado usando a notação literal de objeto (chaves {}).
// Esta é uma forma comum e concisa de criar objetos simples.
const obj1 = {}; // obj1 inicia como um objeto vazio.

// Podemos adicionar propriedades a um objeto dinamicamente, a qualquer momento.
// Aqui, estamos usando a notação de ponto (.) para criar uma nova propriedade 'nome'
// em 'obj1' e atribuir a ela o valor "Bola".
obj1.nome = "Bola";

// A linha abaixo está comentada, mas demonstra uma forma alternativa de acessar/atribuir propriedades:
// a notação de colchetes ([]).
// obj1["nome"] = "Bola Sobrescrito";
// A notação de colchetes é útil quando o nome da propriedade é dinâmico (vindo de uma variável)
// ou contém caracteres especiais que não são permitidos na notação de ponto.
// Se descomentada, esta linha sobrescreveria o valor da propriedade 'nome'.

// Acessando o valor da propriedade 'nome' do objeto 'obj1'.
console.log(obj1.nome); // Saída: "Bola"

// ---- Criando Objetos com Funções Construtoras ----

// 'Obj' (com 'O' maiúsculo, por convenção para funções construtoras) é uma função.
// Ela é projetada para ser usada com a palavra-chave 'new' para criar múltiplos objetos
// que compartilham a mesma estrutura.
function Obj(nome) {
    // A palavra-chave 'this' dentro de uma função construtora (quando chamada com 'new')
    // refere-se ao novo objeto que está sendo criado.

    // Estamos criando uma propriedade 'nome' no novo objeto e atribuindo a ela
    // o valor do parâmetro 'nome' passado para a função construtora.
    this.nome = nome;

    // Também estamos adicionando um método chamado 'exec' ao novo objeto.
    // Um método é simplesmente uma função que é uma propriedade de um objeto.
    this.exec = function() {
        // Este console.log será executado quando o método 'exec' for chamado.
        console.log("Exec...");
    }
};

// ---- Instanciando Objetos a partir da Função Construtora ----

// 'new Obj("Cadeira")' cria uma nova instância (um novo objeto) usando a função construtora 'Obj'.
// 1. Um novo objeto vazio é criado.
// 2. A função 'Obj' é chamada, com 'this' apontando para esse novo objeto.
// 3. O parâmetro "Cadeira" é passado para 'nome'.
// 4. As propriedades 'nome' e 'exec' são adicionadas ao novo objeto.
// 5. O novo objeto é retornado e atribuído a 'obj2'.
const obj2 = new Obj("Cadeira");

// O mesmo processo ocorre para 'obj3', mas com o valor "Mesa".
const obj3 = new Obj("Mesa");

// Acessando as propriedades 'nome' dos objetos 'obj2' e 'obj3'.
// Cada objeto tem sua própria cópia da propriedade 'nome'.
console.log(obj2.nome, obj3.nome); // Saída: Cadeira Mesa

// Chamando o método 'exec' do objeto 'obj3'.
// 'this' dentro da função 'exec' (quando chamada como obj3.exec()) refere-se a 'obj3'.
obj3.exec(); // Saída: Exec...

// Chamando o método 'exec' do objeto 'obj2'.
// 'this' dentro da função 'exec' (quando chamada como obj2.exec()) refere-se a 'obj2'.
obj2.exec(); // Saída: Exec...

// A linha abaixo está comentada. Se fosse descomentada, causaria um erro.
// obj1.exec();
// Isso ocorreria porque 'obj1' foi criado como um objeto literal simples
// e não possui um método chamado 'exec'. O método 'exec' foi definido apenas
// para objetos criados pela função construtora 'Obj'.
// Erro: TypeError: obj1.exec is not a function
