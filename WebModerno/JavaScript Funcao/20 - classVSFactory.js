// Definição de uma classe Pessoa (forma tradicional usando ES6+)
class Pessoa {
    constructor(nome) {
        // Atributo da instância
        this.nome = nome;
    }

    // Método da classe
    falar() {
        console.log(`Meu nome eh ${this.nome}`);
    }
}

// Criando uma instância da classe Pessoa
const p1 = new Pessoa("Joao");
p1.falar(); // Saída: Meu nome eh Joao

// ---------------------------------------------

// Factory function que retorna um objeto com o método falar
const CriarPessoa = nome => {
    return {
        // Arrow function mantém o contexto léxico (não depende de this externo)
        falar: () => console.log(`Meu nome eh ${nome}`)
    };
};

// Criando um objeto com a factory function
const p2 = CriarPessoa("Maria");
p2.falar(); // Saída: Meu nome eh Maria

/* 
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 A primeira forma usa `class`, que é o jeito "moderno" de definir objetos em JS com sintaxe orientada a objetos.
   - Usa `this` para acessar atributos internos da instância.

🔹 A segunda forma usa uma **Factory Function**, que retorna um novo objeto.
   - Usa `closure` (contexto léxico) para manter o valor do nome sem depender de `this`.

📌 DIFERENÇAS IMPORTANTES:
- Com `class`, o uso de `this` pode gerar confusão dependendo do contexto de chamada.
- Com `factory`, especialmente com arrow functions, você evita problemas de `this`.

✅ DICA: Use `class` se quiser trabalhar com herança ou padrões clássicos de OOP.
Use `factory` para criação simples e controle de escopo.
*/
