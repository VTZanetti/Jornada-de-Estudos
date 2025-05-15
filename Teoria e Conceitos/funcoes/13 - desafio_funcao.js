function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    return `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
  } else if (imc < 25) {
    return `IMC: ${imc.toFixed(2)} - Peso normal`;
  } else if (imc < 30) {
    return `IMC: ${imc.toFixed(2)} - Sobrepeso`;
  } else {
    return `IMC: ${imc.toFixed(2)} - Obesidade`;
  }
}

// Exemplo de uso:
console.log(calcularIMC(70, 1.75));
