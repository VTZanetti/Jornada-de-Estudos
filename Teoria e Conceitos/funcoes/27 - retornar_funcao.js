// pesquisar conceito de CURRYING em javascript

function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 3))

function somar2(a) {
    return function (b){
        return a + b;
    }
}

console.log(somar2(5)(2));

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));