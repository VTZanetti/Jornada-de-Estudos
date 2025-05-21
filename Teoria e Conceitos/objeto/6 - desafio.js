// Criando um objeto chamado 'calendario' que representa uma data
let calendario = {
    // Propriedade 'data' é um objeto com atributos dia, mês e ano
    data: {
        dia: 14,          // Dia do mês
        mes: "set",       // Mês abreviado (setembro)
        ano: 2005,        // Ano
    },

    // Método 'funcao' que retorna a data formatada como string "dia/mês/ano"
    funcao: function() {
        // Usamos 'this' para acessar o próprio objeto 'calendario'
        // Retornamos uma template string com os valores da propriedade 'data'
        return `${this.data.dia}/${this.data.mes}/${this.data.ano}`;
    },
};

// Exibe a mensagem concatenando texto com o retorno do método 'funcao'
console.log("O Aniversario da Yasmin e: " + calendario.funcao());
