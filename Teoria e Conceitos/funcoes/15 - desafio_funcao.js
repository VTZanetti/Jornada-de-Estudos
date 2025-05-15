function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Exemplo de uso:
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
console.log(`77°F = ${fahrenheitParaCelsius(77).toFixed(2)}°C`);
