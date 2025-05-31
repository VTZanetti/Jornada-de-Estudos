// 🧱 EXEMPLOS DE CRIAÇÃO DE OBJETOS EM JAVASCRIPT (FOCO EM ORIENTAÇÃO A OBJETOS)

// 📌 1. Notação literal (forma mais comum e simples de criar objetos)
const obj1 = {}; // Cria um objeto vazio
console.log("obj1 criado com notação literal:", obj1); // Resultado: {}

// 📌 2. Usando o construtor nativo da linguagem: Object
// Object é uma função construtora de objetos padrão no JavaScript
console.log("Tipos:");
console.log(typeof Object, typeof new Object()); // 'function', 'object'

const obj2 = new Object(); // Cria um novo objeto usando o construtor Object
console.log("obj2 criado com new Object:", obj2); // Resultado: {}

// 📌 3. Função Construtora (permite criar múltiplas instâncias com comportamento encapsulado)
function Produto(nome, preco, desconto) {
    // this.nome é uma propriedade pública acessível fora da função
    this.nome = nome;

    // Método público que retorna o preço com desconto
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto); // preco e desconto são mantidos em closure
    };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log("Preços com desconto (função construtora):");
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()); // 6.7915, 2249.24

// 📌 4. Função Factory (retorna diretamente um novo objeto)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        // Método interno que calcula o salário final com base nas faltas
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    };
}

const f1 = criarFuncionario("João", 7980, 4); // 26 dias trabalhados
const f2 = criarFuncionario("Maria", 11400, 1); // 29 dias trabalhados

console.log("Salários calculados (função factory):");
console.log(f1.getSalario(), f2.getSalario()); // 6928, 11020

// 📌 5. Object.create(null) — cria um objeto sem herdar de Object.prototype
// Isso resulta em um objeto "limpo", ideal para armazenar dados sem risco de herdar métodos nativos
const filha = Object.create(null);
filha.nome = "Ana";
console.log("Objeto criado com Object.create(null):");
console.log(filha); // { nome: "Ana" }

// 📌 6. JSON.parse() — converte uma string JSON em um objeto JavaScript
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`); // A string deve estar no formato JSON válido
console.log("Objeto criado a partir de JSON:");
console.log(fromJSON.info); // "Sou um JSON"

/* 🧠 REFORÇO CONCEITUAL SOBRE OO EM JAVASCRIPT

📌 Abstração:
   - Você cria objetos que representam entidades do mundo real, com propriedades e métodos relevantes.

📌 Encapsulamento:
   - Os dados e comportamentos estão agrupados no mesmo objeto.
   - Variáveis internas da função construtora ficam "protegidas" por closures (escopo privado).

📌 Herança:
   - Objetos podem herdar propriedades e métodos via prototype ou com `class` e `extends` (ES6+).

📌 Polimorfismo:
   - Objetos diferentes podem ter métodos com o mesmo nome mas comportamentos distintos.

✨ Com isso, o JavaScript permite vários estilos de criação de objetos, favorecendo tanto paradigma procedural quanto orientação a objetos.
*/
