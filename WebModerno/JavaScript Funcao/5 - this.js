const pessoa = {
    saudacao: "Bom Dia!!",

    // Método da pessoa que usa 'this' para acessar a propriedade 'saudacao'
    falar() {
        console.log(this.saudacao); // 'this' aponta para o objeto que chama o método
        // console.log(saudacao) // Esta linha daria erro pois 'saudacao' não está no escopo global
    }
};

// Chamada direta do método dentro do objeto: funciona como esperado
pessoa.falar(); // Saída: "Bom Dia!!"

// ---------- PROBLEMA COM 'this' ----------

// Aqui a função é atribuída a uma variável fora do contexto do objeto
const falar = pessoa.falar;
falar(); 
// Saída: undefined
// Por quê? Porque o 'this' dentro da função agora não se refere mais ao objeto 'pessoa',
// mas sim ao contexto global (no navegador seria 'window', no Node é 'global')
// E no escopo global não existe a propriedade 'saudacao'

// ---------- SOLUÇÃO COM bind ----------

// O método 'bind' retorna uma nova função com o 'this' fixado no objeto passado
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Saída correta: "Bom Dia!!"

// ---------- Outro exemplo do problema com this ----------
const falar2 = pessoa.falar;
falar2(); // Mesmo problema: 'this' está desassociado de 'pessoa' → undefined

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 Em JavaScript, o valor de 'this' **depende de como a função é chamada**, e não de onde ela foi definida.

✔ Quando você chama `pessoa.falar()`, o 'this' aponta corretamente para o objeto `pessoa`.

❌ Mas se você fizer `const falar = pessoa.falar`, está apenas copiando a função, **sem o contexto do objeto**.
   O 'this' dentro da função agora se refere ao objeto global, e não há `saudacao` nesse escopo.

🔧 Para resolver, usamos `bind()` para **forçar o 'this'** a se manter sempre associado ao objeto original.

💡 DICAS:
- Use `.bind(obj)` sempre que for passar métodos de objetos para variáveis, callbacks, temporizadores etc.
- No lugar de funções tradicionais, funções **arrow (=>)** podem ser úteis, pois não alteram o valor de 'this' (herdam do contexto em que foram criadas), mas **não servem como métodos quando você quer usar o 'this' do próprio objeto**.
*/
