const listaDeArgumentos = process.argv.slice(2);

console.log("for ----------------------------- rodando ----------");
for(let controladorFor = 0; controladorFor < listaDeArgumentos.lenght; controladorFor++){
    console.log(`posicao ${controladorFor} valor lido = ${listaDeArgumentos[controladorFor]}`);
}
