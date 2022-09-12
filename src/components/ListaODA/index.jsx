export const ListaODA = ({nome, usuario, descricao, data_inclusao, palavras_chave }) => {
    return(

        <div className="post">


          
                <h1 className="texto">NOME: {nome}</h1>
                <p className="texto">USUARIO: {usuario}</p>
                <p className="texto">DESCRIÇÃO {descricao}</p>
                <p className="texto">DATA: {data_inclusao}</p>
                <p className="texto">PALAVRA CHAVE: {palavras_chave}</p>


        </div>
    )
}