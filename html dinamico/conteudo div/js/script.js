let fale = document.getElementById('tagarela');
let indice = 0;

function falar() {
    const frases = [
        "Hoje está um dia bonito!",
        "Hoje é sexta maluco",
        "Qual o cardápio de hoje para a janta?",
        "Vish, tem prova de informática",
        "Devolve os smurfs",
        "Gargamel",
        "Temos um Smurf"
    ];
    
     let indice = Math.round(Math.random()*(frases.length-1));
     //Qtd de If´s = Par -1
     //4 parametros = 3 If´s
    /*
    if (numero > 0.75) indice = 3;
    else if (numero > 0.50) indice = 2;
    else if (numero > 0.25) indice = 1;
    else indice = 0;
    */
    console.log(frases.length); 
    
        fale.innerHTML = frases[indice];

}


