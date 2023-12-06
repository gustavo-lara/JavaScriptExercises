// criando variáveis do tipo array (vetores
var dinos = ['Tiranossauro Rex', 'Estegossauro', 'Anquilossauro',];

console.log(dinos); // Imprimindo os dados 
console.table(dinos); // Imprimindo os dados em forma de tabela 
console.log("O vetor tem", dinos.length, "elementos.");

//Add elementos a um vetor existente
dinos.push("Brontossauro"); //add no final do vetor (push)
console.table(dinos);
console.log("O vetor tem ", dinos.length, " elementos.");

dinos.unshift("Tricerátops");  //add no início do vetor (unshift)


console.table(dinos);
console.log("O vetor tem ", dinos.length, "elementos.");

//Obtendo um elemento com base em seu índice (posição)

console.table(dinos);

console.log("1° posição: ", dinos[0]);
console.log("3° posição: ", dinos[2]);
console.log("20° posição (não existe, logo vai retornar 'undefined'): ", dinos[19]);

//Alterando elementos com base em seu índice (posição)
dinos[3] = 'Titanossauro';

console.table(dinos);


//Removendo elementos do vetor


dinos.pop();     //Removendo o último elemento (pop)
console.table(dinos);

dinos.shift();     //Removendo o primeiro elemento (shift)
console.table(dinos);

dinos.splice(1, 1);     //Removendo o elemento de índice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos);

//push: coloca em ultimo, 
//pop: tira o ultimo
//unshift: coloca em primeiro, 
//shift: tira o primeiro
//Splice (1, 1) (A partir de quando vai deletar, quantos vai deletar)


//----------------------------------------------------------------------











