// 📦 HERANÇA EM JAVASCRIPT DE FORMA DIDÁTICA

// 🏗️ 1. HERANÇA COM FUNÇÕES CONSTRUTORAS E PROTÓTIPOS (FORMA CLÁSSICA)

// 🔧 Criando uma função construtora chamada "Animal"
function Animal(nome) {
    this.nome = nome;
}

// 🏃 Adicionando um método ao protótipo de Animal
Animal.prototype.falar = function() {
    console.log(`${this.nome} fez um som.`);
};

// 🐶 Criando uma função construtora chamada "Cachorro" que herda de Animal
function Cachorro(nome, raca) {
    Animal.call(this, nome); // 🧠 Chamando o construtor de Animal para herdar as propriedades
    this.raca = raca;        // 🎯 Propriedade específica de Cachorro
}

// 🔗 Conectando os protótipos para herança de métodos
Cachorro.prototype = Object.create(Animal.prototype);

// 🔧 Corrigindo o construtor que ficou apontando para Animal
Cachorro.prototype.constructor = Cachorro;

// 🐾 Adicionando um método específico para Cachorro
Cachorro.prototype.latir = function() {
    console.log(`${this.nome} (da raça ${this.raca}) está latindo!`);
};

// 🚀 Criando uma instância de Cachorro
const cachorro1 = new Cachorro("Bolt", "Pastor Alemão");

cachorro1.falar(); // Saída: Bolt fez um som. (herdado de Animal)
cachorro1.latir(); // Saída: Bolt (da raça Pastor Alemão) está latindo!

// 🔍 Verificando a cadeia de protótipos
console.log(cachorro1 instanceof Cachorro); // true
console.log(cachorro1 instanceof Animal);   // true


// ===========================================================


// 🏗️ 2. HERANÇA COM CLASSES (FORMA MODERNA - ES6)

// 🔧 Definindo a classe pai "Pessoa"
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    // 🗣️ Método da classe Pessoa
    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

// 🎓 Definindo a classe filha "Estudante" que herda de Pessoa
class Estudante extends Pessoa {
    constructor(nome, curso) {
        super(nome);    // 🧠 Chama o construtor da classe mãe (Pessoa)
        this.curso = curso; // 🎯 Propriedade específica de Estudante
    }

    // 📚 Método específico para Estudante
    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}

// 🚀 Criando uma instância de Estudante
const estudante1 = new Estudante("Ana", "JavaScript");

estudante1.falar();   // Saída: Ana está falando. (herdado de Pessoa)
estudante1.estudar(); // Saída: Ana está estudando JavaScript.

// 🔍 Verificando a cadeia de protótipos
console.log(estudante1 instanceof Estudante); // true
console.log(estudante1 instanceof Pessoa);    // true


// ===========================================================


/*
📘 RESUMO DOS CONCEITOS DE HERANÇA EM JAVASCRIPT:

1️⃣ FORMA CLÁSSICA (ANTES DO ES6):
- Usava funções construtoras e ligação dos protótipos manualmente com Object.create.
- Métodos comuns são definidos no prototype.
- Para herdar propriedades, usa-se: Animal.call(this, ...).
- Para herdar métodos, conecta-se os prototypes.

2️⃣ FORMA MODERNA (COM CLASS - ES6):
- Usa a palavra-chave 'class' e 'extends' para herança.
- Usa 'super()' para chamar o construtor da classe mãe.
- Sintaxe mais clara e próxima de linguagens orientadas a objetos tradicionais.

🔗 EM AMBAS AS FORMAS:
- Objetos filhos herdam propriedades e métodos dos objetos pais.
- instanceof permite verificar se um objeto é instância de uma classe ou função construtora.

✅ Herança promove reutilização de código, organização e especialização de objetos.
*/
