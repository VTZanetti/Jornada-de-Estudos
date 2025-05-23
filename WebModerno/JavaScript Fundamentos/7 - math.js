// Declarando uma constante chamada 'raio' com valor 5.6
const raio = 5.6;

// Calculando a área de um círculo usando a fórmula: área = π * raio²
// Math.PI -> Retorna o valor de pi (~3.1415)
// Math.pow(raio, 2) -> Calcula raio elevado à potência 2 (raio ao quadrado)
const area = Math.PI * Math.pow(raio, 2);

// Exibindo o valor da área calculada
console.log(area);                      // Saída: 98.5203456165759

// Verificando o tipo de 'Math'
console.log(typeof Math);                // Saída: 'object'
// Math é um objeto embutido do JavaScript que possui várias funções e constantes matemáticas
