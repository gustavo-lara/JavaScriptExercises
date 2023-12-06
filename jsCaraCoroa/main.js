//Atividade: jogo de cara e coroa (Melhor de 3);

let rodada = 1;
let escolhaJogador = " ";
let face = " ";
let vitórias = 0;
let derrotas = 0;
//faça(do) enquanto(while) rodada <= 3

do {
    
    face = Math.random() >= 0.5 ? "cara" : "coroa"; 
    escolhaJogador = Math.random() >= 0.5 ? "cara" : "coroa"; 
    console.log ("Você escolheu: " + escolhaJogador + " ::: Caiu: " + face);

    if (escolhaJogador == face) {
        vitórias++;
        console.log("Você GANHOU essa rodada!");
    }
    else {
        derrotas ++;
        console.log ("Você PERDEU essa rodada!")
    }

    //console.log(rodada);
    rodada++;
} while (rodada <= 3);

console.log("----------------------------------------");
console.log("               Placar                   ");
console.log("----------------------------------------");

console.log("Vitórias: "+vitórias);
console.log("Derrotas: "+derrotas);