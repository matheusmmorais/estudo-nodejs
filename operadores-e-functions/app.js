const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado){
    console.log("o numero informado é invalido");      
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '=':
        case '%':
            return operador;
        default:
            console.log('operador não é valido');
            return null;
    }
}

readLine.question("Favor informar o primeiro numero:", (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    if (numeroValidado1) {
        readLine.question("Favor informar o segundo numero: ", (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);
            if (numeroValidado2) {
                readLine.question("favor informar o operador: ", (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (validarOperador) {
                        switch (operador) {
                            case '+': console.log(`O operador informado é SOMA, ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`O operador informado é SUBTRAÇÃO, ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*': console.log(`O operador informado é MULTIPLICAÇÃO, ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/': console.log(`O operador informado é DIVISÃO, ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);    
                                break;
                            case '%': console.log(`O operador informado é MODULO, ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);   
                                break;
                            default: break;
                        }
                    }
                }); 
            }
        
        });
    }
});