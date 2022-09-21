import './App.css';
import {Component} from 'react';
import {Cabecalho} from './components/Cabecalho';
import {ListaODA} from'./components/ListaODA';
import {PesquisaODA} from'./components/PesquisasODA';
import { Rodape } from './components/Rodape';




class App extends Component{

  state = {

    busca: '',
    odas: []

  }

  componentDidMount(){

      this.carregaODAs();

  }

  carregaODAs(){

    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(Response=> Response.json())
    .then(odas => this.setState({odas}))

  }

  buscaODA = (evento) => {

    this.setState({busca: evento.target.value});
    this.carregaODAs();

  }

  render(){

    const{ odas} = this.state;

    return (  

      <section className='container'>

      <Cabecalho/>
  
      <div>
        <PesquisaODA
          busca={this.state.busca}
          buscaODAS={this.buscaODA}
          odas={odas.length}
        />
      </div>


        <div className='posts'>
          {odas.map(oda=> (
                <ListaODA
                  nome = {oda.nome}
                  usuario = {oda.usuario}
                  descricao = {oda.descricao}
                  data_inclusao = {oda.data_inclusao}
                  palavras_chave= {oda.palavras_chave}    
                  />                         
          ))}
        </div>

        <Rodape/>
        
      </section>
    )
  }
}
export default App;
