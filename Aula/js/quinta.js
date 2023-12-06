//1° FORMA
let number = [1,2,3,4,5,6];

document.write(number);

document.write("O valor da 3° posição é ", number[2], "<br>");

let number2 = number.slice();
console.log(number2);

number2[0] *= 2;
number2[1] *= 2;
number2[2] *= 2;
number2[3] *= 2;
number2[4] *= 2;
number2[5] *= 2;

document.write("O dobro será ", number2, "<br>");

let number3 = number.map(valor => valor * 2);

document.write("O dobro será", number2, "<br>");

document.write("________________________________________<br><br>")


//Matriz: Conjunto de arrays

let Matriz = [
    [9,0,1],
    [7,1,2],
    [6,2,8],
    [1,3,9]

];

//Obtendo elemento com base e seus índices
console.log("Matriz[1, 2] =", Matriz[1][2]);
console.log("Matriz[2, 0] =", Matriz[2][0]);

//Alternado valores de elementos com base e seus índices
Matriz[1][2] = 20
Matriz[2][0] = 30

