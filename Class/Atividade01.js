/*Crie e utilize uma classe "Sorvete" contendo as propiedades: sabor,
preço, tamanho (P | M | G) 
Crie um sorvete de chocolate pequeno
Crie um sorvete de morango grande
Mude o preço do Sorvete de Morango para 20.51
*/

class Sorvete{
    constructor(Ssabor, Spreco, Stamanho){
        this.sabor = Ssabor;
        this.preco = Spreco;
        this.tamanho = Stamanho;
    }
    sorveteEscolhido(){
        console.log("Sorvete de "+this.sabor+" "+this.tamanho+" "+this.preco)};
    
        alterarpreco(preco) {
            this.preco = preco;
        }
}

let S1 = new Sorvete("Chocolate",4.50,"Pequeno");
let S2 = new Sorvete("Morango", 18.20, "Grande");


console.log("Pedidos: ");
S1.sorveteEscolhido();
S2.sorveteEscolhido();
console.log("\n")
console.log("O valor foi alterado:");
S2.alterarpreco(20.51);
S2.sorveteEscolhido();


//OU


S2.preco = 21;
S2.sorveteEscolhido();