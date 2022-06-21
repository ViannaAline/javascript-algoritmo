let fn = function() {

};

const produto = {
    nome: "Ipad", // atributo / propriedades (nome, preco, desconto) - objeto produto
    preco: 5600,
    desconto: 0.5,
    precoComDesconto: function() {   // precoComDesconto é considerado um método
        return this.preco * (1 - this.desconto); // referenciar o objeto precisa colocar this
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());
