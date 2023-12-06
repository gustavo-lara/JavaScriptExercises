console.log("Atividade de diagonal e matriz \n");
let info = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("A diagonal da esquerda para direita é: ", info[2][0], info[1][1], info[0][2]);
console.log("A diagonal da direita para esquerda é: ", info[0][2], info[1][1], info[2][0]);
console.table(info);


console.log("-------------------------");

console.log("Atividade função");
console.log("\n");

function idade(anoN) {
    return 2023 - anoN
};

console.log("Olá, eu sou Gustavo e tenho", idade(2000), "anos" + ".\n");

function KML(litros) {
    return litros * 12
}
console.log("O carro tem 60 litros no tanque, como ele faz 12Km/L, ele vai andar", KML(60) + "Km/L.");
console.log("-------------------------");
console.log("Atividade função otimizado\n");

function votar(Age) {
    return Age >= 16 ? "você pode votar" : "você não pode votar";
}
console.log("Se você tem", Age = 15 + " anos,", votar(Age));

console.log("-------------------------");

console.log("Atividade Switch Case");

function verificarVoto(idadeV) {
    switch (true) {
        case idadeV < 16:
            return "Você ainda não pode votar!";

        case idadeV >= 18 && idadeV < 70:
            return "Você tem voto obrigatório!";

        case idadeV >= 70:
            return "Você tem o voto opcional";

        case idadeV == 16 || idadeV == 17:
            return "Você tem o voto opcional";
        default:
            return "Idade inválida";
    }
}

console.log(verificarVoto(14));
console.log(verificarVoto(16));
console.log(verificarVoto(19));
console.log(verificarVoto(88));

console.log("-------------------------");



