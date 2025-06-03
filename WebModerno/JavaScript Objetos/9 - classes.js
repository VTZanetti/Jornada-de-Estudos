// 🏗️ CLASSES EM JAVASCRIPT – SINTAXE MODERNA E ORIENTADA A OBJETOS (ES6+)

// 🧱 Definindo uma classe básica chamada Pessoa
class Pessoa {
    // 👷 O método constructor é chamado automaticamente quando um objeto é criado a partir da classe
    constructor(nome, idade) {
        // 🔐 Propriedades do objeto (cada instância terá seu próprio nome e idade)
        this.nome = nome;
        this.idade = idade;
    }

    // 📣 Método comum da classe – todas as instâncias terão acesso a ele
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// 🔨 Criando instâncias (objetos) da classe Pessoa usando a palavra-chave 'new'
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

// 🎬 Chamando métodos das instâncias
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 25 anos.
pessoa2.apresentar(); // Saída: Olá, meu nome é Maria e tenho 30 anos.


// 👨‍👩‍👧 HERANÇA – Uma classe pode herdar de outra usando a palavra-chave 'extends'

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        // 🔄 Chama o constructor da classe pai (Pessoa)
        super(nome, idade);
        this.cargo = cargo;
    }

    // 🔧 Sobrescrevendo ou adicionando métodos
    apresentar() {
        console.log(`Sou ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
    }
}

// 🎯 Criando um objeto da subclasse
const funcionario1 = new Funcionario("Carlos", 40, "Desenvolvedor");

funcionario1.apresentar(); 
// Saída: Sou Carlos, tenho 40 anos e trabalho como Desenvolvedor.


// 📌 MÉTODOS ESTÁTICOS – Pertencem à classe, não às instâncias
class Util {
    static saudacao() {
        console.log("Bem-vindo ao sistema!");
    }
}

Util.saudacao(); // Chamado diretamente pela classe, sem instanciar

// ❌ Utilizando o método estático por instância causaria erro:
// const u = new Util();
// u.saudacao(); ← Isso não funciona


// 🧠 ENCAPSULAMENTO COM GETTERS E SETTERS

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco; // propriedade "semi-privada" por convenção (underline)
    }

    // 🔍 Getter – acessa a propriedade como se fosse um atributo
    get preco() {
        return this._preco;
    }

    // ✏️ Setter – permite validação antes de modificar o valor
    set preco(valor) {
        if (valor > 0) {
            this._preco = valor;
        } else {
            console.log("Preço inválido!");
        }
    }
}

const p1 = new Produto("Notebook", 3000);
console.log(p1.preco); // 3000

p1.preco = -100;       // Não será aceito, pois é inválido
console.log(p1.preco); // Ainda 3000

p1.preco = 2500;       // Valor aceito
console.log(p1.preco); // 2500


/*
📘 RESUMO:
- class: define um modelo (molde) para objetos.
- constructor: método executado automaticamente na criação de instâncias.
- this: refere-se à instância atual.
- extends: herança entre classes.
- super: chama o constructor da classe pai.
- métodos: funções associadas ao comportamento do objeto.
- métodos estáticos: pertencem à classe, não às instâncias.
- getter/setter: controlam acesso a propriedades com lógica interna.
*/
