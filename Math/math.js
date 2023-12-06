// Obtendo o valo de Pi
let pi = Math.PI;

console.log(pi);

//arredondamentos e dados truncados]
console.log("Arredondando para o inteiro mais próximo "+Math.round(pi));
console.log("Arredondando para cima: "+Math.ceil(pi));
console.log("Arredondando para baixo "+Math.floor(pi));
console.log("Truncando(retirando a parte decimal): "+Math.trunc(pi));

//Potencia 
let x = 2;
let y = 4;
console.log("X elevado a Y = "+Math.pow(x,y));

//Raiz quadrada
console.log("Raiz quadrada de y é = "+Math.sqrt(y));

//Retornar o valor absoluto, se for negativo vira positivo.i
console.log("ABS(x) = "+Math.abs(x));

//Valor randomico
console.log(Math.random()); //entre 0 e 0,99999999
console.log(Math.floor(Math.random()*9));
console.log(Math.floor(Math.random()*10));
