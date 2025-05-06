// Duas expressoes resultar em TRUE  (aritimeticos/relacionais/logicos)
// CENARIO : SE EU TRABALHAR UM DIA DA SEMANA IREI CHAMAR UBER PARA SAIR, SE TRABALHAR 2, IREI CHAMAR UBER PREMIUM E SE TRABALHAR 3 DIAS VOU TOMAR SORVETE TAMBEM
let trabalho1 = true; 
let trabalho2 = true;
let trabalho3 = true;
let poucodinheiro = trabalho1 || trabalho2 || trabalho3;
let bastantedinheiro = (trabalho1 && trabalho2) || (trabalho2 && trabalho3) || (trabalho1 && trabalho3);
let muitodinheiro = trabalho1 && trabalho2 && trabalho3;
console.log("Pouco Dinheiro: "+ poucodinheiro)
console.log("Bastante Dinheiro: " + bastantedinheiro)
console.log("Muito Dinheiro: " + muitodinheiro)
let uber = poucodinheiro || muitodinheiro || bastantedinheiro;
let uberpremium = (muitodinheiro || bastantedinheiro) 
uber = !uberpremium && poucodinheiro


console.log("Vou de uber normal: " + uber)

console.log("Vou de uber premium: " + uberpremium)

let sorvete = uberpremium && muitodinheiro

console.log("Vou tomar sorvete: " + sorvete)
// Duas expressoes resultar em FALSE  (aritimeticos/relacionais/logicos)
