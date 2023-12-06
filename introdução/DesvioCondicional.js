//Se tiver alguma coisa eu faço "Se eu tiver eu faço"
console.log("--------------------");
console.log("Contextualização\n")

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else { //se não
    console.log("Você é menor de idade.")
}

console.log("--------------------");

//Condições compostas com If
const login = "admin";
const senha = "12345";

var loginUser = "pafuncio";
var senhaUser = "aaaaaa";

if (loginUser == login && senhaUser == senha)
    console.log("Acesso permitido");
else
    console.log("Acesso negado");
console.log("--------------------");
//Criando variáveis locais com let (só existem dentro do bloco onde foram criados)
let mes = "Agosto";
let dia = 15;

if (dia == 15 && mes == "Agosto") {
    let mensagem = "Hoje é dia 15 de Agosto";
    console.log(mensagem);
}

console.log("Tentanto acessar a variável local fora do bloco, vai dar erro");
//console.log(mensagem);

//Criando uma função com desvio condicional
console.log("--------------------");
function desconto(valorCompra) {
    let desconto = 0

    if (valorCompra >= 1000) //compras a cima de R$  

        desconto = valorCompra * 5 / 100; //recebem desconto de 5%

    return desconto;
}

var totalCompra = 950;
console.log("Valor total da compra: R$", totalCompra, "Desconto: R$", desconto(totalCompra));

var totalCompra = 1800;
console.log("Valor total da compra: R$", totalCompra, "Desconto: R$", desconto(totalCompra));
console.log("--------------------");

let preco = 440
var resultado = preco <= 100 ? "Tá barato!" : "Vish, tá caro!";
/* O operador acima é o mesmo que:
if (preco <= 100)
        resultado = "Tá barato!";
   else
        resultado = "Vish, tá muito caro!";
*/
console.log("Preço: R$", preco, "-", resultado);
//?=resposta do If, :=resposta do else
console.log("--------------------");
console.log("Switch Case\n");

let menuSelecionado = "Home"
switch (menuSelecionado) {
    case "Home":
        console.log("Voce clicou no link 'Home'");
        break;
    case "Quem somos":
        console.log("Voce clicou no link 'Quem somos'");
        break;
    case "Contato":
        console.log("Voce clicou no link 'Contato'");
        break;
    default:
        console.log("Opção inválida de menu");
        break;
}

let periodo = 10;
switch (periodo) {
    case 1:
    case 2:
    case 3:
        console.log("Primeiro Trimestre");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Segundo Trimestre");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Terceiro Trimestre");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Quarto Trimestre");
        break;
    default:
        console.log("Inválido");
    }
