var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Os jogadores são invalidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto')
    placar = jogador1 < jogador2;
}else {
    console.log('Ninguem marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador1 < jogador2:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Empate');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

for(let i in array) {
    console.log(i);
}

for(i in object) {
    console.log(i);
}

for(i of array) {
    console.log(i);
}

for(i of object.propriedade1) {
    console.log(i);
}

var a = 0;

while(a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while(a < 10);