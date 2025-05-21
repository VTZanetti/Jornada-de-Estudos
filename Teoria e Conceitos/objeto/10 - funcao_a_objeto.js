// Função construtora chamada 'Data' para criar objetos de data
function Data(dia = 1, mes = 1, ano = 2021) {
    // Atributos do objeto
    this.dia = dia;   // Dia da data
    this.mes = mes;   // Mês da data
    this.ano = ano;   // Ano da data

    // Método 'exibir' que retorna a data formatada "dia/mês/ano"
    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

// Criando objetos (instâncias) usando a palavra-chave 'new'
const d1 = new Data();                   // Usa os valores padrão: 1/1/2021
const d2 = new Data(22, 11, 2023);        // 22/11/2023
const d3 = new Data(3, 4, 2022);          // 3/4/2022

// Exibindo os objetos no console (mostra suas propriedades e métodos)
console.log(d1);
console.log(d2);
console.log(d3);

// Chamando o método 'exibir()' para mostrar a data formatada
console.log(d1.exibir());   // Saída: 1/1/2021
console.log(d2.exibir());   // Saída: 22/11/2023
console.log(d3.exibir());   // Saída: 3/4/2022
