// defineProperty - defineProperties

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);