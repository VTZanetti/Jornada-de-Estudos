function Pessoa() {
    // A propriedade 'idade' é inicializada em 0 para cada nova instância
    this.idade = 0;

    // Guardamos a referência de 'this' (que aponta para a instância da Pessoa) em 'self'
    // Isso é necessário porque dentro da função do setInterval, o 'this' mudaria
    const self = this;

    // Função sendo executada a cada 1000ms (1 segundo)
    setInterval(function () {
        self.idade++; // Usamos 'self' para manter a referência correta ao objeto instanciado
        console.log(self.idade); // Exibe a idade atualizada
    }/* .bind(this) */, 1000); 
    // OBS: o .bind(this) está comentado pois, com 'self', ele não é necessário
};

// Criamos uma nova instância de Pessoa, que começa a contar a idade a cada segundo
new Pessoa();

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 Problema:
- Dentro da função `setInterval`, o `this` não se refere mais ao objeto criado com `new Pessoa()`
- Em vez disso, o `this` aponta para o escopo global (no modo não estrito), o que causaria erro ao acessar `this.idade`

🔧 Solução 1 (usada acima):
- Armazenar o valor de `this` em uma constante (`self`) fora da função
- Assim, podemos usar `self` dentro da função interna para acessar corretamente a instância

🔧 Solução 2 (alternativa):
- Usar `.bind(this)` na função passada ao `setInterval`
  Exemplo:
  ```javascript
  setInterval(function () {
      this.idade++;
      console.log(this.idade);
  }.bind(this), 1000)
  💡 DICAS:

    Essa técnica de salvar this como self era comum antes do ES6

    Atualmente, pode-se usar funções arrow (=>), que não alteram o valor de this
    Versão moderna com arrow function:

    function Pessoa() {
        this.idade = 0;
        setInterval(() => {
            this.idade++;
            console.log(this.idade);
        }, 1000);
    }

✔ A função arrow herda o this do contexto em que foi criada, evitando problemas de escopo!
*/


