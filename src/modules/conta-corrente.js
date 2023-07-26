import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {

    #taxa = 0.01;

    constructor(agencia, numero, titular) {
        super(agencia, numero, titular);
    }
    
    sacar(valor) {
        const valorSacar = valor + valor * this.#taxa;
        return super.sacar(valorSacar);
    }
}
