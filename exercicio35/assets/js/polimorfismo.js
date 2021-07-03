// SUPERCLASS
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`saldo insuficiente: $${this.saldo}`);
        // this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();

};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C:${this.agencia}/ ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const Correntista = new Conta('000', '0001', 2000);
/* Correntista.sacar(300);
Correntista.depositar(400);
Correntista.sacar(2300); */
// console.log(Correntista);

function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.cronstructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor) {
    if(this.saldo >(this.saldo + this.limite)){
        console.log(`saldo insuficiente: $${this.saldo}`);
        // this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();

};

function contaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
   
}

contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.cronstructor = contaPoupanca;


