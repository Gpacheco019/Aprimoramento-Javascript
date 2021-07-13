// 705.484.450-52 070.987.720-03

class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });            
    }

    verifcaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCPf() {
        const cpfSemdigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemdigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemdigito + digito1);
        this.novoCPF = cpfSemdigito + digito1 + digito2;
    }

    static geraDigito(cpfSemdigito) {
      let total = 0;
      let reverse = cpfSemdigito.length + 1;

      for ( let stringNUmerica of cpfSemdigito) {
          total += reverse * Number(stringNUmerica);
          reverse--;
      }

      const  digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }


    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11)  return false;
        if(this.verifcaSequencia()) return false;
        this.geraNovoCPf();
      

        return this.novoCPF === this.cpfLimpo;

    }
}

// let validacpf = new ValidaCPF('070.987.720-03');
// console.log(validacpf.valida());

// if (validacpf.valida()) {
//     console.log('CPF Válido');
// } else {
//     console.log('CPF Inválido')
// }