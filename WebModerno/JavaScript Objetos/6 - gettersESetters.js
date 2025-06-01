// 📦 Exemplo de uso de getters e setters em JavaScript com objetos

// 🔁 Objeto que simula uma sequência numérica que só pode crescer
const sequencia = {
    // 🔐 Propriedade "privada" (por convenção, não por segurança real)
    // O underline (_) indica que essa propriedade não deve ser acessada diretamente
    _valor: 1,

    // 🔍 GETTER – Acessar o valor atual da sequência
    // Toda vez que `sequencia.valor` for acessado, essa função será executada
    get valor() {
        // Retorna o valor atual e depois incrementa
        // Ou seja, a cada acesso, o valor aumenta em 1
        return this._valor++;
    },

    // ✏️ SETTER – Tentar atribuir um novo valor à sequência
    // A ideia aqui é permitir que o valor da sequência só seja alterado para frente
    set valor(valor) {
        // Verifica se o novo valor é menor do que o atual
        if (valor > this._valor) {
        }

        // ✅ Comportamento prático: não faz nada se o valor for menor que o atual
        // Nada é feito se o valor proposto não for maior do que o atual
    },
};

// 🧪 Vamos testar:

// Primeira chamada ao getter → retorna 1 e incrementa
// Segunda chamada → retorna 2 e incrementa
console.log(sequencia.valor, sequencia.valor); // Saída: 1 2

// Agora tentamos mudar diretamente o valor da sequência para 1000
sequencia.valor = 1000; // setter será chamado, mas como 1000 > valor atual (3), nada acontece

// Mais chamadas ao getter → deve retornar 3 e depois 4
console.log(sequencia.valor, sequencia.valor); // Saída: 3 4

/*
📌 RESUMO:
- `get` permite definir uma função para acessar um valor como se fosse uma propriedade.
- `set` permite interceptar a atribuição de valor a uma propriedade.
- A lógica implementada impede que a sequência volte para trás (somente cresce).
- A propriedade `_valor` é tratada como interna (por convenção).
- Há um pequeno erro lógico no setter (recursão infinita), mas como a condição não é satisfeita no exemplo, não causa problema aqui.
*/
