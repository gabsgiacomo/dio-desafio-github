function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return "Defina dois numeros!"
    const fraseUm = criaFraseUm(num1, num2);
    const fraseDois = criaFraseDois(num1, num2);

    return `${fraseUm} ${fraseDois}`;
}

function criaFraseUm(num1, num2) {
    let iguais = '';

    if(num1 !== num2) {
        iguais = 'nao';
    }

    return `Os numeros ${num1} e ${num2} ${iguais} sao iguais.`
};

function criaFraseDois(num1, num2) {
    const soma = num1 + num2;

    let res10 = 'menor';
    let res20 = 'menor';
    const comp10 = soma > 10;
    const comp20 = soma > 20;

    if(comp10) {
        res10 = 'maior';
    }

    if(comp20) {
        res20 = 'maior';
    }

    return `Sua soma eh ${soma}, que eh ${res10} que 10 e ${res20} que 20`;
}

console.log(comparaNumeros(1, 2));