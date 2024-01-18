var livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto);
}