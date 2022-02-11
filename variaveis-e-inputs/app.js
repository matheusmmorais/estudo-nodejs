const readLine = require("readline").createInterface ({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstantString = "minha primeira constante"; 
console.log(minhaPrimeiraConstantString);

readLine.question("informe sua idade: ", input => {
    let leituraDeCampo;
    leituraDeCampo = input;
    console.log(`o usuario digitou ${leituraDeCampo}`)
});
