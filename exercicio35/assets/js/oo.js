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
function Produto(nome, preco) {
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
console.log(p1);