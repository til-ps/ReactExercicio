import React from 'react';
import './App.css';
import Input from './componentes/input/Input'
import Li from './componentes/itemCadastrado/itemCadastrado'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nomeDoProduto: "",
      marca: "",
      quantidade: "",
      listaDeProdutos: [] 
    }
  }
  atualizar = () =>{
    fetch("http://localhost:5000/produtos").then(resposta => resposta.json()).then(dados => this.state.listaDeProdutos = dados.produtos
  ).catch(erro => console.log(`ERRO: ${erro}`));
  }
  atualizarInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  enviarDado = () =>{
    let dados = {
      nome: this.state.nomeDoProduto,
      marca: this.state.marca,
      quantidade: this.state.quantidade
  
    }
    fetch('http://localhost:5000/produto/novo', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados)
    }).then(resposta => resposta.json()).then(dados => {
      this.atualizar();
      }).catch(erro => console.log(`ERRO: ${erro}`));
  }
  componentDidMount() {
    this.atualizar();
  }
  render() {
    return (
      <div>
        <h1>Lista de Compras</h1>
        <div id="novo">
          <h3>Novo produto:</h3>
          <div>
            <Input value={this.state.nomeDoProduto} atualizar={this.atualizarInput} type="text" name="nomeDoProduto" placeholder="Digite o nome do Produto"/>
            <Input value={this.state.marca} atualizar={this.atualizarInput} type="text" name="marca" placeholder="Digite a marca"/>
            <Input value={this.state.quantidade} atualizar={this.atualizarInput} type="number" name="quantidade" placeholder="0"/>
            <button onClick={this.enviarDado}>Cadastrar</button>
          </div>
        </div>
        <div id="lista">
          <ul>
            {this.state.listaDeProdutos.map((item, indice) => {
              return <Li key={indice} produto={item}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
