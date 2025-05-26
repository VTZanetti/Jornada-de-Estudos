// Função responsável por tratar um erro e lançar um novo erro personalizado
function tratarErroELancar(erro) {
    // Exemplo: lançar um erro padrão do JavaScript
    // throw new Error("Erro inesperado");

    // Também seria possível lançar um tipo diferente (não recomendado):
    // throw 10

    // Aqui, um erro personalizado é lançado como objeto
    throw {
        nome: erro.name,           // Nome do erro original (ex: "TypeError")
        msg: erro.message,         // Mensagem original do erro
        date: new Date(),          // Data e hora em que o erro foi tratado
    }
}

// Função que tenta imprimir o nome da pessoa em letras maiúsculas e com "!!!"
function imprimirNomeGritado(obj) {
    try {
        // ERRO AQUI: a propriedade correta seria 'obj.nome', não 'obj.name'

        // Vai lançar erro porque 'obj.name' é undefined
        console.log(obj.name.toUpperCase() + "!!!"); // mudar name para nome RESOLVE!!!

    } catch (e) {
        // Se houver erro, chama a função de tratamento e relança o erro
        tratarErroELancar(e);
    } finally {
        // Este bloco SEMPRE será executado, ocorra erro ou não
        console.log("Vai ser gerado de qualquer maneira");
    }
}

// Criação de um objeto com a propriedade incorreta (deveria ser 'name')
const obj = { nome: "Roberto" };

// Chamada da função que irá gerar erro e tratar com try/catch
imprimirNomeGritado(obj);