const futuro = Date.now() + 1000;
var quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}

console.log("Quantidade: " + quantidade)