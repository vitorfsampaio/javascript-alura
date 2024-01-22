async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos')
    conexaoConvertida = await conexao.json()
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}


//json-server --watch db.json