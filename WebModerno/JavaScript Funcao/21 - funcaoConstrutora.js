// Função construtora Pessoa (estilo tradicional em JavaScript)
function Pessoa(nome) {
    // Atributo público acessível por this
    this.nome = nome;

    // Método público
    this.falar = function () {
        console.log(`Meu nome eh ${this.nome}`);
    };
};

// Criando uma instância de Pessoa usando o operador 'new'
const p1 = new Pessoa("Joao");
p1.falar(); // Saída: Meu nome eh Joao

/* 
🧠 EXPLICAÇÃO DIDÁTICA:

🔹 Em JavaScript, funções também podem ser usadas como **construtores**.
   - Quando usamos `new Pessoa("Joao")`, o JavaScript cria um novo objeto e o `this` dentro da função passa a apontar para esse novo objeto.

🔹 `this.nome = nome` cria uma **propriedade pública** chamada `nome`.
🔹 `this.falar = function() { ... }` cria um **método público** que pode ser chamado por qualquer instância criada com `new Pessoa`.

📌 DIFERENÇA ENTRE FUNÇÃO CONSTRUTORA E FACTORY FUNCTION:
- **Construtora** usa `this` e deve ser usada com `new`.
- **Factory Function** retorna diretamente um objeto.

✅ DICA:
Evite usar vírgulas em lugar de ponto-e-vírgula em blocos de código (`this.nome = nome,`) — apesar de funcionar, é confuso e fora do padrão.
*/