function saudacao (){
    console.log("Olá, seja bem vindo\n");

}
saudacao();
saudacao();
saudacao();
saudacao();
saudacao();
saudacao();

// Criando uma função que soma dois valores e retorna o resultado
function somar (valor1, valor2) {
    return valor1 + valor2;
}

console.log('5 + 3 =', somar(5, 3) );
console.log('12 + 8 =', somar(12, 8) );
console.log('6,5 + 2,12 =', somar(6.5, 2.12) );

let v1 = 9;
let v2 = 6;
console.log('v1 + v2 =', somar(v1, v2) );


function bomDia() {
    console.log("Olá, muito bom dia para você!")

}
console.log("\n")

bomDia();
bomDia();
bomDia();
console.log("\n");

//Criando uma função que calcula e retorna o desconto em uma venda 
function desconto(valorVenda){
    return valorVenda * 5/100;  // 5% de desconto
}

let totalPedido = 300.00;
let totalDesconto = desconto(totalPedido);
let totalFinal = totalPedido - totalDesconto;

console.log("-------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor líquido: R$", totalFinal);
console.log("-------------------------------");

//Criando uma função que apresenta pessoas (Apenas escreve no log, mas não retorna nada)

function apresentaPessoas(nome, idade, cidade) {
    console.log('Apresento a vocês: ', nome, 'que tem', idade,'anos e mora em', cidade);
}

apresentaPessoas('Zuleika', 19, 'Brotas');
apresentaPessoas('Pafúncio', 21, 'Jaú');
apresentaPessoas('Epaminondas', 16, 'Barra Bonita');