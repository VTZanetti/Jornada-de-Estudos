// Função fábrica que cria objetos de data
function criarData(dia, mes, ano) {
    return {
        // Atributos do objeto
        dia: dia,    // Dia da data
        mes: mes,    // Mês da data
        ano: ano,    // Ano da data

        // Método 'exibir' que retorna a data no formato "dia/mês/ano"
        exibir: function() {
            // 'this' se refere ao próprio objeto criado pela função
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
};

// Criando três objetos de data usando a função fábrica
const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(3, 4, 2022);

// Criando e exibindo uma data diretamente, sem armazenar em variável
console.log(criarData(10, 4, 2006).exibir());  // Saída: 10/4/2006

// Exibindo as datas dos objetos criados
console.log(d1.exibir());  // Saída: 9/10/2010
console.log(d2.exibir());  // Saída: 22/11/2023
console.log(d3.exibir());  // Saída: 3/4/2022