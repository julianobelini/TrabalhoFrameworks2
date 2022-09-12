export const PesquisaODA = ({busca, buscaODAS, odas}) => {


    return(

      
        <div className="barrapesquisa">

          <p className="qteodas"> {odas} odas </p>

          <input
          name='busca'
          type='text'
          value={busca}
          placeholder='o que deseja buscar'
          onChange={buscaODAS}
          className='buscainput'
          />
        </div>



    )
}