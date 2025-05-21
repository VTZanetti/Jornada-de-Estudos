// Criando um objeto chamado 'data' para representar uma data no formato dia/mês/ano
const data = {
    dia: 1,      // Dia inicial
    mes: 10,     // Mês inicial (outubro)
    ano: 2025    // Ano definido
};

// Mesmo sendo uma constante (const), podemos modificar as propriedades internas do objeto
// Isso porque 'const' impede apenas a reatribuição da variável, não a alteração de seus conteúdos
data.dia = 27;   // Alterando o valor da propriedade 'dia' para 27
data.mes = 12;   // Alterando o valor da propriedade 'mes' para 12 (dezembro)

// Exibindo a data no formato dia/mês/ano usando template string
console.log(`${data.dia}/${data.mes}/${data.ano}`);  // Saída: 27/12/2025
