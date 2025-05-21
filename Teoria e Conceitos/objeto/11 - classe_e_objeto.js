// Criando uma classe chamada 'Data'
class Data {
    // O método 'constructor' é chamado automaticamente quando usamos 'new'
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;   // Atributo dia
        this.mes = mes;   // Atributo mês
        this.ano = ano;   // Atributo ano
    }

    // Método 'exibir' que retorna a data formatada no padrão "dia/mês/ano"
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

// Criando uma instância (objeto) da classe 'Data'
const d1 = new Data();
d1.dia = 24;    // Alterando manualmente o dia
d1.mes = 21;    // Atenção: mês 21 não existe, mas JavaScript não impede isso (não há validação)
d1.ano = 2022;  // Alterando o ano
console.log(d1);  // Exibe o objeto inteiro no console

// Criando outro objeto com valores passados diretamente no construtor
const d2 = new Data(31, 12, 2021);
console.log(d2.exibir());  // Saída: 31/12/2021

// Verificando os tipos
console.log(typeof d1);    // 'object' (d1 é um objeto)
console.log(typeof Data);  // 'function' (no JavaScript, classes são funções por baixo dos panos)
