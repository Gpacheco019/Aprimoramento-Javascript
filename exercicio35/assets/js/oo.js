// prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome =sobrenome;

    this.nomeCompleto= () => this.nome + ' ' + this.sobrenome;

}

const pessoa1 = new Pessoa('Luiz', 'O.');
const data = new Date();

console.dir(pessoa1);

// ============================= utilzando o prototype para passar os metodos 
/* function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
console.log(p1); */

// ===================== TRABALHANDO COM HERANÇA

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //criei um objeto vazio, para linkar o prototype de produto ao prototype de camiseta.
Camiseta.prototype.constructor = Camiseta; //informo que a função contrututora de camiseta é camiseta e não o Produto.

// sobreescrevendo metodo aumento de produto para dentro do proto de camisete
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(){
            if(typeof valor !== 'number') return;
            estoque = valor;
        },
    })
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'preta');

camiseta.desconto(5);

console.log(produto);
console.log(camiseta);
