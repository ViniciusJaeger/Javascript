function Calcnotas(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

let n1 = -1;
let n2 = -3;
let n3 = -4;

let resultado = Calcnotas(n1, n2, n3);


if(resultado >= 6 && resultado < 11){
    console.log(`Você foi aprovado, pois sua média é ${resultado}, e suas notas são ${n1}, ${n2} e ${n3}.`)
}
else if(resultado <= 5 && resultado >= 0){
    console.log(`Você foi reprovado, pois sua média é ${resultado}, e suas notas são ${n1}, ${n2} e ${n3}.`)
}
else{
    console.log('Essa opção não existe')
}