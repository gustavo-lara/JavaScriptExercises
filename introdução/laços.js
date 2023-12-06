console.log("---for---")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("--------------------------")

for (let i = 1; i <= 2; i++) {
    if (i % 2 != 0)
        console.log(i);
}
console.log("\n");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i);
}
console.log("\n");

// Calcular e exibir a soma dos elementos do vetor

let numeros = [109, 1900, 5, 7, 10, 999, 90, 76065, 7654, 102443];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma dos elementos do array é: " + soma);


//Com o array acima, calcule e exiba a quantidade de pares e ímpares

//banco de dados, mais recomendado esse!
let par = 0;
let impar= 0;
                    //todos os itens  //i+1
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 == 0) //é dividido por dois E sobra 0? Se não, vai para baixo.
     par++; 

     else 
     impar ++;
}
console.log("Pares: ", par);
console.log("\n");
console.log("Impares: ", impar);


let x = 0;
//coisas convencionais 
while (x < 10) {
    console.log("Entrei no laço while...");
 x++;
}
console.log("Terminei");


