export class Calculadora {
    numer01 : number;
    numer02: number;

    constructor(numer01: number, numer02: number){
        this.numer01 = numer01;
        this.numer02 = numer02;
    }

    Soma(): void {
        let soma = this.numer01 + this.numer02
        console.log(soma);
    }
}