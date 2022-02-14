const listaDeArgumentos = process.argv.slice(2);
console.log(listaDeArgumentos);

console.log("for ----------------------------- rodando ----------");
for(let controladorFor = 0; controladorFor < listaDeArgumentos.lenght; controladorFor++){
    console.log(`posicao ${controladorFor} nome ${listaDeArgumentos[controladorFor]}`);
    console.log(listaDeArgumentos);
};
