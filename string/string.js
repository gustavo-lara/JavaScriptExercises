//Variavel de texto é string
let texto = "Hello Word!";
console.log(texto);

texto += " Vamos brincar com strings!";
console.log(texto);

//Comprimento da string (tamanho / caracteres)
console.log("Tamanho do texto: "+ texto.length);

//Caracter de escape
console.log("Escrevendo com \"aspas duplas\" dentro da string iniciada com aspas");
console.log('Escrevendo com \'aspas duplas\' dentro da string iniciada com aspas simples');

console.log("c:\\minha pasta\\arquivo.txt");

console.log("Código \t\tNome \t\tIdade");
console.log("===================================")
console.log("0 \t\tZuleika \t16");
console.log("1 \t\tPafúncio \t18");
console.log("2 \t\tTibúrcio \t17");

//---------------------------------------

//Obtendo partes de strings(Substring)
let sub = texto.substring(18,36); //Posição onde começa e onde termina a substring
console.log(sub);

let sub2 = texto.substr(10,12) //posição onde começa a quantidade de caracteres da substring
console.log(sub2);

// Substituir parte de uma string
let substituir = texto.replace("strings","textos");
console.log(substituir);

//Texto maius. e minus.
let textoTrans = "Era um DIA muito QUENTE e Chuvoso!";
console.log(textoTrans);

let maiusc = textoTrans.toLocaleUpperCase();
console.log();

let minusc = textoTrans.toLocaleLowerCase();
console.log(minusc);

//limando espaços em branco excessivos
let textoEspa = "          um texto qualquer          ";
console.log("***" + textoEspa + "***");
console.log("***" + textoEspa.trim() + "***");

//Obtendo um caracter em uma posição específica da string

let textoCarac = "O esperto rato, perplexo ficou frente o aparato";
console.log("Elemento na posição 0 = "+ textoCarac.charAt(0));
console.log("Elemento na posição 5 = "+ textoCarac.charAt(5));

//convertendo string em um array de palavras 
let textoConvert = "O esperto rato, perplexo ficou frente o aparato";
let vetor = texto.split(" ");
console.log(textoConvert);
console.log(vetor);

//Procurando uma palavra na string
let textoPesq = "O esperto rato, perplexo ficou frente o aparato";

let pos1 = textoPesq.indexOf("rato")
console.log(pos1);

let pos2 = textoPesq.lastIndexOf("rato");

let contem = textoPesq.includes("perplexo");
console.log("Contém a palavra 'perplexo'? ", contem);
















