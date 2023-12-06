//Criando array numérico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

//Verificando se o array contém um item
var contem9 = numeros.includes(9);
console.log("Contem 9?", contem9);
var contem0 = numeros.includes(0);
console.log("Contem 0?", contem9);

//Ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

//Invertendo as posições dos itens
numeros.reverse();
console.table(numeros);
