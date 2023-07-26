export class Bola {
    //preciso definir os atributos
    constructor(cor, circunferencia, material){
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    
    //preciso definir os métodos, agora
     trocaCor(novaCor) {
    this.cor = novaCor;
}
     mostrarCor() {
        console.log(this.cor);
}
}