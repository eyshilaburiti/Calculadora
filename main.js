/*CALCULADORA*/ 

function somar(n1, n2){
    return Number(n1) + Number(n2)
}

function subtrair(n1, n2){
    return Number(n1) - Number(n2)
}

function multiplicar(n1, n2){
    return Number(n1) * Number(n2)
}

function dividir(n1, n2){
    return Number(n1) / Number(n2)
}

do{
    var opcao = prompt('[CALCULADORA]\n1) Somar\n2) Subtrair\n3) Multiplicar\n4) Dividir')

    var num1 = prompt('Digite um número: ')
    var num2 = prompt('Digite outro número: ')

    if(opcao == 1){
        alert(somar(num1, num2))
    }else if(opcao == 2){
        alert(subtrair(num1, num2))
    }else if(opcao == 3){
        alert(multiplicar(num1, num2))
    }else if(opcao == 4){
        alert(dividir(num1, num2))
    }else{
        alert('Não há essa opção.')
    }
}while(opcao != 0 )