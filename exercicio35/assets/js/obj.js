// defineProperty - defineProperties

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        // value: estoque, //Valor
        // writable: false, // pode ou não ser alterado
        configurable: true, // pode ou não ser configuravel
        get: function(){
            return estoque;
        },
        set: function(valor) {
            
        }
    });
    

    /* Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    }) */
}

function criaProduto (nome) {

    return{
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}

const p2 = criaProduto('Valter');
console.log(p2.nome);

/* const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1.estoque); */

