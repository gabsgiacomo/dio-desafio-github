function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n1 - Soma(+)\n2 - Subtracao (-)\n3 - Multiplicacao (*)\n4 - Divisao Real (/)\n5 - Divisao Inteira (%)\n6 - Potenciacao (**)'));

    if(!operacao || operacao >= 7) {
        alert('Erro! Operacao invalida');
    }else {        
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1 || !n2) {
            alert('Erro! Parametros invalidos')
            calculadora();
        }else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divInteira() {
                resultado = n1 % n2;
                alert(`O reslto da divisao entre ${n1} e ${n2} eh igual a ${resultado}`);
                novaOperacao();
            }
    
            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a  ${n2} eh igual a ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operacao?\n1 - Sim\n2- Nao');
    
                if(opcao == 1) {
                    calculadora();
                }else if (opcao == 2) {
                    alert('Ate mais');
                }else {
                    alert('Digite uma opcao valida!');
                    novaOperacao();
                }
            }
    
            if(operacao == 1) {
                soma();
            }else if(operacao == 2) {
                subtracao();
            }else if(operacao == 3) {
                multiplicao();
            }else if(operacao == 4) {
                divReal();
            }else if(operacao == 5) {
                divInteira();
            }else if(operacao == 6) {
                potencia();
            }  
        }
    }     
}

calculadora();