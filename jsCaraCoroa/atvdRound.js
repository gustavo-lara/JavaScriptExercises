let A, B, ano;
A = 80;
B = 95;
ano = 0;

// ++ soma 1 e ele msm
while (A < B) {
    ano++;
    A += A * 0.03;
    B += B * 0.015;
    console.log("Ano: "+ano+" ::: Pop. A: "+Math.round(A)+" ::: Pop.B: "+Math.round(B));
}

console.log("Anos: "+ano);


