//Grupo de coisas, classificar;
//Clas coloca a primeira inicial pela minuscula;
//constructor: quando chamar a class vai chamar dentro do constructor as duas info;
class Pessoa{
    constructor(pNome, pIdade){
        this.nome = pNome;
        this.idade = pIdade;
    };
    apresentarPessoa(){
    console.log("Oi, meu nome é "+this.nome+". E eu tenho "+this.idade+" anos")};

    envelhecer(){
        this.idade++;
        console.log
    }
};

let p1 = new Pessoa("Gustavo", 35);
let p2 = new Pessoa("Duda", 85);

p1.envelhecer();
p1.envelhecer();
p1.apresentarPessoa();
p2.apresentarPessoa();
