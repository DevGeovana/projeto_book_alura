function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
                //faz uma cópia e altera somente o preço
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosComDesconto
}