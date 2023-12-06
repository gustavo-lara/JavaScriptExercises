console.log("-----EXERCÍCIO 1-----");
var fruits = ['Banana' , 'Maça' , 'Pera' , 'Uva' , 'Morango'];
//console.table(fruits);


fruits.push("Tangerina")
fruits.unshift("Goiaba");
//console.table(fruits);


console.log(fruits[5]);


var elementosProcurado = 'Uva';
var posicao = fruits.indexOf(elementosProcurado);
console.log(elementosProcurado,"está no índice: ", posicao);
fruits.splice (posicao, 1);
console.table(fruits);


var copia1 = fruits.slice(2, 5);
console.log("Vetor cópia 1");
console.table(copia1);

