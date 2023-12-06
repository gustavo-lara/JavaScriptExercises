//Criando um objeto do tipo data
let data1 = new Date();
console.log(data1);

//Criando um objeto tipo data para uma data específica
let data2 = new Date("2005-05-12");
console.log(data2);

let data3 = new Date("2005-05-12 00:00:00");
console.log(data3);

console.log(data1.getFullYear());
console.log(data1.getMonth() + 1);
console.log(data1.getDate());

const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(mes[data1.getMonth()]);
const dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(dia[data1.getDay()]);
console.log("------------------------------");
console.log("Olá senhor, hoje é", dia[data1.getDay()], "Feira, dia", data1.getDate(), "de", mes[data1.getMonth()], "do ano de", data1.getFullYear() + ".");
console.log("São", data1.getHours(), "horas e", data1.getMinutes(), "Minutos no horário de Brasília.");


//criar um SE para quando for determinado horario do dia colocar:
// Bom dia!|Boa tarde!|Boa noite!

if (data1.getHours() < 12) {
    console.log("Bom dia!");
}
else if (data1.getHours() < 18) {
    console.log("Boa tarde!")
}
else
    console.log("Boa noite!");