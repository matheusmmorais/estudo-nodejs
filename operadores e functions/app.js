const readLine = require(readline).createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    try {
        return Number.parseFloat(numero);
    } catch (e) {
        console.log("o numero informado é invalido");
    }
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

readLine.question("Favor informar o primeiro numero", (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readLine.question("Favor informar o segundo numero", (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question("favor informar o operador", (operador) => {
                    const validarOperador = validarOperador(operador);
                    if (validarOperador) {
                        switch (operador) {
                            case '+': console.log(`O operador informado é SOMA, ${validarNumber1} + ${validarnumber2} = ${validarNumber1 + $validarnumber2} `);
                                break;
                            case '+': console.log(`O operador informado é SUBTRAÇÃO, ${validarNumber1} - ${validarnumber2} = ${validarNumber1 - $validarnumber2} `);
                                break;
                            case '+': console.log(`O operador informado é MULTIPLICAÇÃO, ${validarNumber1} * ${validarnumber2} = ${validarNumber1 * $validarnumber2} `);
                                break;
                            case '+': console.log(`O operador informado é DIVISÃO, ${validarNumber1} / ${validarnumber2} = ${validarNumber1 / $validarnumber2} `);    
                                break;
                            case '+': console.log(`O operador informado é MODULO, ${validarNumber1} % ${validarnumber2} = ${validarNumber1 % $validarnumber2} `);    
                                break;
                            default: break;
                        }
                    }
                }); 
            }
        
        });
    }
});