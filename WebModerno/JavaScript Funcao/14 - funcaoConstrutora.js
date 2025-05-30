function carro(velocidadeMax = 200, delta = 5) {    
    // 🔒 Atributo privado
    // Só acessível dentro da função carro
    let velocidadeAtual = 0;

    // 🚗 Método público para acelerar o carro
    this.acelerar = function() {
        // Se ainda não atingiu a velocidade máxima, acelera
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            // Caso ultrapasse, limita à velocidade máxima
            velocidadeAtual = velocidadeMax;
        };
    };

    // 📊 Método público para obter a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
};

// 🛻 Criando uma instância do carro com valores padrão (max: 200, delta: 5)
const uno = new carro;
uno.acelerar(); // Acelera 5 (uma vez)
console.log(uno.getVelocidadeAtual()); // Saída: 5

// 🏎️ Criando uma instância de carro com valores personalizados (max: 350, delta: 20)
const ferrari = new carro(350, 20);
ferrari.acelerar(); // +20
ferrari.acelerar(); // +20 (total 40)
ferrari.acelerar(); // +20 (total 60)
console.log(ferrari.getVelocidadeAtual()); // Saída: 60

// 🧠 Verificando o tipo das variáveis
console.log(typeof carro);    // function → carro é um construtor
console.log(typeof ferrari);  // object   → ferrari é uma instância de carro

/*
📘 EXPLICAÇÃO DIDÁTICA:

🔧 `function carro(...) { ... }` → É um *construtor*. Quando usamos `new carro()`, criamos um novo objeto com os métodos definidos.

🔐 `let velocidadeAtual = 0` → A variável está *encapsulada* dentro da função e só pode ser acessada através dos métodos públicos (`acelerar`, `getVelocidadeAtual`).

⚙️ `this.acelerar` e `this.getVelocidadeAtual` → São *métodos públicos* que tornam possível interagir com o objeto fora da função.

📌 DICA:
- Usar `let` dentro da função permite criar "atributos privados", protegendo os dados internos do objeto.
- Isso é uma forma simples de **encapsulamento**, um dos pilares da programação orientada a objetos.

*/
