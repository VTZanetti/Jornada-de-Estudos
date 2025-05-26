// Função que verifica se a nota recebida é maior ou igual a 7.
// Caso seja, imprime uma mensagem de aprovação.
// OBS: o ponto e vírgula após o bloco do if e da função não é necessário.
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

// Chamadas da função com duas notas diferentes:
soBoaNoticia(8.1);  // Saída: Aprovado com 8.1 (porque 8.1 >= 7)
soBoaNoticia(6.9);  // Nada é impresso (porque 6.9 < 7)

// ---------------------------------------------------------------------------

// Função que imprime valores "verdadeiros" (truthy) em JavaScript.
// O if verifica implicitamente se o valor é "truthy".
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`Valores verdadeiros: ${valor}`);
    }
}

// Testes com diferentes tipos de valores para entender o comportamento de truthy/falsy:

// Valores "falsy" (considerados false em contextos booleanos) — NÃO imprimem nada:
seForVerdadeEuFalo();            // undefined
seForVerdadeEuFalo(null);        // null
seForVerdadeEuFalo(undefined);   // undefined
seForVerdadeEuFalo(NaN);         // Not a Number
seForVerdadeEuFalo("");          // string vazia
seForVerdadeEuFalo(0);           // zero

// Valores "truthy" (considerados verdadeiros) — SERÃO impressos:
seForVerdadeEuFalo(-1);          // número negativo ainda é truthy
seForVerdadeEuFalo(" ");         // string com espaço é truthy
seForVerdadeEuFalo("?");         // string com caractere
seForVerdadeEuFalo([]);          // array vazio é truthy
seForVerdadeEuFalo([2, 3]);      // array com elementos
seForVerdadeEuFalo({});          // objeto vazio

/*
🧠 RESUMO DIDÁTICO:

FALSY VALUES EM JAVASCRIPT:
----------------------------
- false
- 0
- ""
- null
- undefined
- NaN

TRUTHY VALUES:
--------------
- qualquer número diferente de 0 (inclusive negativos)
- strings não vazias (mesmo " ")
- arrays (mesmo vazios)
- objetos (mesmo vazios)

💡 DICA:
Em validações simples, pode-se usar diretamente `if(valor)` para checar existência ou presença de conteúdo. Mas tome cuidado com falsos positivos/negativos — entenda os tipos!
*/
