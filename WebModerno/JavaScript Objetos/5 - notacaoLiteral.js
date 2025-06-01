// 📦 Trabalhando com objetos em JavaScript – Conceitos úteis e sintaxe moderna

// ✅ Criando constantes com valores simples
const a = 1;
const b = 2;
const c = 3;

// 🧱 Forma tradicional de criar um objeto atribuindo os nomes das propriedades explicitamente
const obj1 = { a: a, b: b, c: c };

// 🧠 Forma moderna (a partir do ES6): quando o nome da variável e o nome da chave são iguais,
// você pode omitir a repetição e escrever apenas uma vez
const obj2 = { a, b, c };

// 📌 Resultado: obj1 e obj2 são objetos com as mesmas propriedades e valores
console.log(obj1, obj2); // Saída: { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }


// 🧠 Criação dinâmica de propriedades em objetos

// 🔤 Suponha que queremos criar uma propriedade com um nome dinâmico (armazenado numa variável)
const nomeAttr = "nota";     // chave dinâmica
const valorAttr = 7.87;      // valor associado

// 🧱 Forma tradicional de adicionar essa chave ao objeto:
const obj3 = {};
obj3[nomeAttr] = valorAttr; // usando colchetes [] para definir a propriedade com base na variável

console.log(obj3); // Saída: { nota: 7.87 }

// ✅ Forma moderna: já criar o objeto com a chave dinâmica usando colchetes diretamente na definição
const obj4 = {
    [nomeAttr]: valorAttr  // chave entre colchetes indica que o nome vem de uma variável
};

// Resultado: obj4 também será { nota: 7.87 }


// 🔧 Definindo funções como métodos de um objeto

const obj5 = {
    // 🧱 Forma tradicional de declarar uma função como propriedade
    funcao1: function() {
        // lógica aqui
    },

    // ✅ Forma moderna (ES6+): declaração mais enxuta de métodos dentro de objetos
    funcao2() {
        // lógica aqui
    },
};

// 📌 Ambas as funções funcionam da mesma maneira, a diferença está na sintaxe
// Isso permite organizar melhor o código e economizar escrita
console.log(obj5); // Saída: objeto com dois métodos: funcao1 e funcao2