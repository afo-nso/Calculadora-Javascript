function calculadora(){
    const operacao =Number(prompt('Escolha uma operação\n 1 - soma (+) \n 2 - subtração (-)\n 3 - multipicação (*)\n 4 - divisao real (/)\n5 - divisão inteira (%)\n6 - potenciação (**)\n '));
    
    if(!operacao || operacao>=7){
        alert('Operação inválida');
        calculadora();
    }else{
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1||!n2){
            alert('opção inválida, por favor digite um número válido');
            calculadora();
        }else{

            function soma(){
                    resultado = n1+n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
            function subtracao(){
                resultado = n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multipicacao(){
                resultado = n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal(){
                resultado = n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira(){
                resultado = n1%n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }

            function potenciacao(){
                resultado = n1**n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opc = prompt('Deseja fazer outra opetração? \n 1 - Sim\n 2 - Não');
                if(opc == 1){
                    calculadora();
                }else if(opc==2){
                    alert('Até mais');
                }else {
                    alert('digite uma opcão válida');
                    novaOperacao();
                }
            }

    

                if(operacao ==1){
                    soma();
                }else if(operacao == 2){
                    subtracao();   
                }else if (operacao ==3){
                    multipicacao();
                }else if(operacao ==4){
                    divisaoReal();
                }else if(operacao ==5){
                    divisaoInteira();
                }else if(operacao ==6){
                    potenciacao();
                }
        }
    }
}
calculadora();
