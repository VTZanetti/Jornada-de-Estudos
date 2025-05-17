// Função que retorna outra função
function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

// Criando uma função que multiplica por 5
const multiplicarPor5 = criarMultiplicador(5);

console.log(multiplicarPor5(10)); // 50
