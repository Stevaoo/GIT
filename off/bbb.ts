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

    Sub(): void {
        let sub = this.numer01 - this.numer02;
        console.log(sub);
    }
    
    div(): void {
        let div = this.numer01 / this.numer02;
        console.log(div);
    }

    multi(): void {
        let multi = this.numer01 * this.numer02; 
        console.log(multi);
    }
    //

    rest(): void {
        let rest = this.numer01 % this.numer02;
        console.log(rest);
    } 
}