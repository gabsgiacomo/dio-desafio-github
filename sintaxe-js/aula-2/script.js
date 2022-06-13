var vOuF = false;
console.log(typeof(vOuF));

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

var nome = 'Gabriel';
console.log(typeof(nome));

var funcao = function() {}
console.log(typeof(funcao));

let variavel2 = 'gabriel'
variavel2 = 'mentira'
console.log(variavel2);

const constante = 'gabriel'
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log((escopoLocalInterno));
}

escopoLocal();

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

var divInteira = 5 % 2;

var pot = 2 ** 10;