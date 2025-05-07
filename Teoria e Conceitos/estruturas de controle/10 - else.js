let hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = "bom dia";
} else if (hora < 18){
    saudacao = "boa tarde"
} else if (hora < 22){
    saudacao = "Boa noite"
} else{
    saudacao = "muito tarde"
};
console.log(saudacao);