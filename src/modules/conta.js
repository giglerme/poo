//criar um modelo de conta bancária

export class Conta {
    
    //defininco os atributos
    #agencia
    #numero;
    #titular;
    #saldo = 0;

    /*definindo o constructor
    constructor(agencia, numero, titurlar){
        this.#agencia = agencia;
        this.#numero = numero;
        
    }

*/


//definindo os metodos
get agencia() {
    return this.#agencia;
}
set agencia(novaAgencia) {
    this.#agencia = novaAgencia;
}

get numero(){
    return this.#numero;
}
set numero(novoNumero){
    this.#numero = novoNumero;
}

get titular() {
    return this.#titular;
}

set titular(novoTitular){
    if(novoTitular === ''){
        throw new Error('Titular não pode ser em branco');
    }
    this.#titular = novoTitular;
}

get saldo() {
    return this.#saldo;
}


    //definindo o construtor
    constructor(agencia, numero, titular) {
        this.#agencia = agencia;
        this.#numero = numero;
        this.#titular = titular;
    }

    //definindo metodos
    depositar(valor) {
        const podeDepositar = valor > 0;
        if (podeDepositar){
            this.#saldo += valor;
        }
    }
    
    sacar(valor) {
        const podeSacar = valor > 0 && valor <= this.#saldo;
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
        }
    }

    transferir(contaDestino, valor) {
        const podeTransferir = valor > 0 && valor <= this.#saldo;
        if(podeTransferir){
            this.#saldo -= valor;
            contaDestino.#saldo += valor;
        }

    }

    toString(){
        return `Agencia: ${this.agencia, 
                Conta: ${this.numero},
                Titular: ${this.titular.nome},
                Saldo: R$ ${this.}

    }
}