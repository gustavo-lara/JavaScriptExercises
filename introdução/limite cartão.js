//Limite cartão
//O cartão do Tiburcio´s Bank tem limite de 500R$.
//Mostrar para o usuário o valor gasto na fatura.
//Se a fatura for maior q o limite, apresente para o usuário que ele estourou o limite do cartão,
//Criando lançamentos aleatórios e informar se o cliente ainda tem limite ou estourou o cartão. 
//Inicialmente, informe cordialmente o nome do cliente, o dia de hoje e p valor que tem em conta,
//logo após, informar o restante pedido a cima.

let name = "Gustavo";
let banco = "Bank's";
let data = "----20/12/2070----"
let lanca = [100, 100, 70, 20,];
let soma = lanca[0] + lanca[1] + lanca[2] + lanca [3];
let produto = ["Nike", "Jaqueta", "Celular", "Pc"];
let lCartao = 500;
let retirada = 230;

console.log(data);
console.log("--------------------");
console.log("Olá",name +"."+" Bem vindo de volta ao",banco +".");
console.log("O limite do seu cartão é de "+500+"R$.");
console.log("--------------------");
console.log("Durante o mês foram realizadas", lanca.length, "lançamentos:");
console.log(lanca[0]+"R$ - ",produto[0], lanca[1]+"R$ -",produto[1],lanca[2]+"R$ -",produto[2],lanca[3]+"R$ -",produto[3]);
console.log("--------------------");

if (soma > 500) {
    console.log("Você não tem limite.");
} else { //se não
    console.log("Você tem limite.")
}

console.log("Seu limite agora é de", lCartao - soma +"R$.");
console.log("--------------------");
console.log("Selecionado retirada de", retirada +"R$");
console.log("Carregando...")
if (retirada <= (lCartao - soma)) {
    console.log("Retirada aprovada");
}
else {
    console.log("Retirada não aprovada")
};
console.log("--------------------");
console.log("Seu limite agora é de",retirada - (lCartao - soma)+"R$");














