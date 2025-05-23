// Declarando uma constante com um nome
const nome = "Rebeca";

// Forma tradicional de concatenar strings usando o operador '+'
const concatenacao = "Ola " + nome + "!";
console.log(concatenacao);              // Resultado: 'Ola Rebeca!'

// Usando template string (entre crases ``) → permite interpolação de variáveis e quebras de linha
const template = `
    Ola
    ${nome}!
`;

console.log(template);
// Resultado:
// Ola
// Rebeca!

// Também podemos usar expressões dentro da interpolação (${ ... })
console.log(`1 + 1 = ${1 + 1}`);        // Resultado: '1 + 1 = 2'
