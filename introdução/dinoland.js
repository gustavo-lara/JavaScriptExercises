//Procurando o índice (posição) de elementoa
var dinos =['Tricerátops', 'Tiranossauro Rex', 'Estegossauro', 'Anquilossauro', 'Brontossauro',
'Ictiossauro', 'Pterodáctilo', 'Espinossauro'];
console.table(dinos);

var elementosProcurado = 'Pterodáctilo';

var posicao = dinos.indexOf(elementosProcurado);

console.log(elementosProcurado,"está no índice: ", posicao);

elementosProcurado = "Estegossauro";

posicao = dinos.indexOf(elementosProcurado);

console.log(elementosProcurado, "está no índice: ", posicao);

//indexOF (Qual local esta na tabela dos índices)


elementosProcurado = "Castellossauro";
var posicao = dinos.indexOf(elementosProcurado);
console.log(elementosProcurado,"está no índice", posicao)
console.log("indexOf = -1 significa que o elemento não foi encontrado no vetor");


// Excluindo um elemento com base em seu nome

var elementoExcluir = 'Pterodáctilo';

var posicao = dinos.indexOf('Pterodáctilo');  //Obtendo a posição do elemento 

dinos.splice(posicao, 1);

console.table(dinos);

//Criando cópia de array
var copia1 = dinos.slice();
console.log("Vetor cópia 1");
console.table(copia1);


// Criando cópia de parte de um array - slice (onde começa - onde termina)
var copia2 = dinos.slice(2, 5);
console.log("Vetor cópia 2");
console.table(copia2);