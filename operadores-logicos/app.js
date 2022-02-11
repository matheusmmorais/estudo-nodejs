const { read } = require("fs");

const readLine = require("readline").createInterface ({
    input: process.stdin,
    output: process.stdout
})

console.log("este programa vai checar se você é maior de 18 e tem habilitação para saber se pode entrar no kart");
console.log("alem das suas verificacoes, precisamos verificar se você esta na lista de presença do horario");

readLine.question("qual o ano do seu nascimento: ", ano => {
    if (ano > 2004){
        console.log("Você não tem 18 anos? (Sim/Não)");
    }else{
        readLine.question("Você possue habilitação? (Sim/Nao)", habilitacao => {
           if (!(habilitacao.toUpperCase() === "SIM")) {
                console.log("Você não possue habilitação para entrar no kart");
           } else {
               readLine.question ("Qual seu nome: ", nome => {
                   switch(nome){
                        case 'douglas':
                           console.log("bem vindo ao kart Douglas");
                           break;
                        case 'rafael':
                            console.log("bem vindo ao kart Rafael");
                            break;
                        default: 
                            console.log("Usuario não identificado");
                            break;
                   }
               })

           }
        })
    }
})