import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta{

    #rendimento = 0.01;

    render(){
        const valorRendimento = this.saldo * this["__#20566@#rendimento"];
        this.depositar(valorRendimento); 
    }
    //WebGL2RenderingContext()
}
