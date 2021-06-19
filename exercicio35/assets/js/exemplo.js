// FUNÇÃO CONSTRUTORA RETORNA OBJETOS
// FUNÇÃO FABRICA RETORN TAMBEM OBJETOS
// CONSTRUTORA -> PESSOA(NEW)

function Pessoa(nome, sobrenome) {
    // Atributos ou Metodos privados
    const ID = 12354;
    const metodoInterno = function(){

    };

    // atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome =sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };  
}


const p1 = new Pessoa('Luiz', 'Otavio');

// ====== TRANSPONDO FUNÇÃO FABRICA PARA FUNÇÃO CONSTRUTORA.========//


function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicial = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
                alert('conta invalida');

                return
            }

            this.display.value = String(conta)

        }catch(error){
            alert('conta Invalida');
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            
            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) =>{
        this.display.value += valor;
    };    

}

const calculadora = new Calculadora();
calculadora.inicial();