const listaArgumentos = process.argv.slice(2)

console.log ("Rodando For -----------------------------")
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`posicao = ${controladorFor} item: ${listaArgumentos[controladorFor]}`);
};

console.log ("Rodando While -----------------------------")
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length){
    console.log(`posicao = ${controladorWhile} item ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
};

console.log ("Rodando Do While -----------------------------")
let controladorDoWhile = 0;
do {
    console.log(`posicao = ${controladorDoWhile} item: ${listaArgumentos[controladorDoWhile]}`)
    controladorDoWhile++;
} while (controladorDoWhile < listaArgumentos.length);

console.log ("Rodando For Of -----------------------------")
let controladorForOf = 0;
for (const Argumento of listaArgumentos){
    console.log(`posicao ${controladorForOf} item: ${Argumento}`);
    controladorForOf++;
};