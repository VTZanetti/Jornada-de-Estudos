// Loop usando 'var' para controlar a variável 'i'
for (var i = 0; i < 10; i++) {
    console.log(i); // Imprime os valores de i de 0 até 9
}

// Como 'var' não tem escopo de bloco, 'i' ainda está acessível aqui fora
console.log("i =", i); // Saída: i = 10 (valor após o último incremento do loop)
