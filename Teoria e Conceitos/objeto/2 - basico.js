// Criamos um objeto chamado "produtoMeia" que representa um produto à venda
const produtoMeia = {
    // Propriedade "nome": nome do produto
    nome: "Meia de Alien",

    // Propriedade "preco": valor original da meia
    preco: 26.49,

    // Propriedade "quantidadeNoEstoque": quantas meias estão disponíveis no estoque
    quantidadeNoEstoque: 99,

    // Propriedade "desconto": porcentagem de desconto em formato decimal (20% = 0.20)
    desconto: 0.20,

    // Método "precoComDesconto": calcula o preço final após aplicar o desconto
    precoComDesconto: function() {
        // "this" se refere ao próprio objeto "produtoMeia"
        // A fórmula aplica o desconto ao preço original:
        // preço * (1 - desconto) => 26.49 * (1 - 0.20) = 26.49 * 0.80
        return (this.preco * (1 - this.desconto)); 
    } 
}

// Exibe no console o preço da meia com o desconto aplicado
console.log(produtoMeia.precoComDesconto());
