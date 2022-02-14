try {
    const listaDeProdutos = ["Pão", "Leite", "Café", "Laranja", "Macarrao", "Sabonete", "Detergente"];

    const listaDeArgumento = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutos.filter(produto => {
        return listaDeArgumento.find(argumento => argumento === produto);
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Os itens estão disponiveis: ${produto}`));
    
    const listaDeProdutosSolicitadosIndisponiveis = listaDeArgumento.filter(argumento =>{
        return !listaDeProdutos.find(produto => produto === argumento);
    })
    
    listaDeProdutosSolicitadosIndisponiveis.forEach(argumento => console.log(`os itens não estao disponiveis ${argumento}`));
    
    listaDeProdutos.sort();
    listaDeProdutos.forEach(produto => console.log(`esses são os produtos disponíveis: ${produto}`));
}catch (e){
    console.log("não foi possivel concluir o pedido.")
};

