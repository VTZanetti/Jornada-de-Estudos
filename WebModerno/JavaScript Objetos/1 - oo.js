// CÓDIGO NÃO EXECUTÁVEL – Exemplo teórico sobre paradigmas de programação

// 🛠️ Paradigma Procedural (Programação Estruturada)
processamento(valor1, valor2, valor3);
// 👉 Foco em funções: dados são passados como parâmetros e manipulados externamente.

// 🧱 Paradigma Orientado a Objetos (OO)
const objeto = {
    valor: 10,
    valor1: 20,
    valor2: 30,
    processamento() {
        // 👉 Foco agora está no próprio objeto
        // A lógica é encapsulada dentro dele
        console.log(this.valor + this.valor1 + this.valor2);
    }
};

objeto.processamento(); // 🧠 "O objeto tem comportamento" (método ligado aos seus dados)

// 🧠 PRINCÍPIOS IMPORTANTES DA ORIENTAÇÃO A OBJETOS:

// 1. Abstração:
//    - Capturar os detalhes essenciais do mundo real, ignorando o que é irrelevante.
//    - Exemplo: um objeto `Carro` abstrai detalhes como `modelo`, `motor`, `acelerar()`.

// 2. Encapsulamento:
//    - Esconder os detalhes internos e expor apenas uma interface pública segura.
//    - Você usa um método sem precisar saber como ele funciona internamente.

// 3. Herança:
//    - Um objeto pode herdar características (atributos/métodos) de outro.
//    - Exemplo: `classe Carro` → `classe Ferrari extends Carro`

// 4. Polimorfismo:
//    - Um mesmo método pode se comportar de forma diferente em objetos distintos.
//    - Exemplo: `animal.falar()` pode emitir sons diferentes se o objeto for um `Cachorro` ou `Gato`

/*
📌 Em resumo:
- Procedural: foco em funções e procedimentos.
- OO: foco em objetos que possuem dados (estado) e comportamentos (métodos).
- OO ajuda a modelar sistemas mais próximos da realidade, facilita manutenção e reutilização de código.
*/
