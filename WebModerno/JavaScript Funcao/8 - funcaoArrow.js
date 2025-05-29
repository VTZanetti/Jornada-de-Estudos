function Pessoa() {
    this.idade = 0;

    // Usando arrow function no setInterval
    setInterval(() => {
        this.idade++;              // 'this' aqui se refere à instância criada por 'new Pessoa'
        console.log(this.idade);   // Mostra a idade sendo incrementada a cada segundo
    }, 1000); // Executa a cada 1000ms (1 segundo)
}

new Pessoa(); // Cria uma nova pessoa e inicia a contagem da idade

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 `setInterval` executa uma função repetidamente com um intervalo fixo entre as execuções (1 segundo no caso).

🔧 A função usada dentro do `setInterval` é uma **arrow function**:
- Arrow functions **não têm seu próprio `this`**
- Elas capturam o `this` do contexto **em que foram definidas**

🧠 Por isso, `this.idade` dentro da arrow function continua apontando para o objeto criado por `new Pessoa`, 
sem necessidade de salvar `this` em uma variável como `const self = this`, ou usar `.bind(this)`.

✔ Este é o **jeito mais moderno e limpo** de lidar com escopo do `this` em funções assíncronas ou de callback.

💡 DICA:
Se tivesse usado uma função tradicional dentro do `setInterval`, o `this` apontaria para o contexto global e daria erro:
```javascript
setInterval(function () {
    this.idade++; // Erro: 'this' não é a instância de Pessoa
}, 1000);
Para resolver nesse caso, seria necessário usar .bind(this) ou capturar com const self = this.

✅ Portanto, prefira arrow functions quando quiser manter o this do contexto externo!
*/
