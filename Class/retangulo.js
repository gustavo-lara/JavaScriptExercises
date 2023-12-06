// Criando uma classe retângulo

class Retangulo {
    constructor(rBase, rAltura) {
        this.base = rBase;
        this.altura = rAltura;
    };
    calcularArea() {
        return (this.base * this.altura);
    };
    alterarBase(base) {
        this.base = base;
    }

    alterarAltura(altura){
        this.altura = altura;
    }
}

let ret1 = new Retangulo(10, 15);
console.log("Área = " + ret1.calcularArea() + "cm²");


//Alterando valores do reteângulo inicial

ret1.alterarBase(20);

console.log("Nova área = "+ret1.calcularArea()+"cm²");