const fabricantes = ["Mercedes", "Audi", "BMW"];

// 🔹 Função que será chamada para cada item do array
function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`);
};

// 🌀 O método `forEach` percorre cada elemento do array e executa a função fornecida
fabricantes.forEach(imprimir); 
// Saída:
// 1, Mercedes
// 2, Audi
// 3, BMW

// ✅ Também é possível passar uma função anônima diretamente:
fabricantes.forEach(function(a) {
    console.log(a); // Imprime apenas o nome de cada fabricante
});
// Saída:
// Mercedes
// Audi
// BMW

// 🔁 Podemos também ignorar o primeiro parâmetro (o valor) e capturar apenas o índice
fabricantes.forEach(function(_, x) {
    console.log(x + 1); // Imprime apenas o número da posição (começando do 1)
});
// Saída:
// 1
// 2
// 3

/*
📚 EXPLICAÇÃO DIDÁTICA:

🔹 `forEach` é um método de array muito usado em JavaScript para iterar (percorrer) cada elemento.
   - Ele recebe uma função de callback com até **3 parâmetros**:
     1. valor atual
     2. índice
     3. array completo

🔹 A função pode ser definida fora (como `imprimir`) ou passada diretamente (função anônima).

📌 EXEMPLO DE SINTAXE GERAL:
```javascript
array.forEach(function(elemento, indice, array) {
   // lógica com elemento
});
💡 DICAS IMPORTANTES:

    Use forEach quando quiser apenas percorrer e executar algo para cada item (sem precisar alterar o array).

    Se precisar transformar ou gerar um novo array, use map() em vez de forEach.

    Se quiser parar no meio do loop, use um for tradicional, pois forEach não pode ser interrompido com break.

*/