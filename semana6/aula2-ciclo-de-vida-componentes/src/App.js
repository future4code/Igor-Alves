import React from 'react';
import './App.css';
import Tarefa from './components/Tarefa/Tarefa'



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inputTarefa: "",
      listaTarefas: [],
    }
  }


  controleInputTarefas = e => {
    this.setState({
      inputTarefa: e.target.value,
    })
  }


  adicionarTarefa = () => {
    
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputTarefa,
      completa: this.state.completa,
    }

    const copiaListaTarefas = [...this.state.listaTarefas, tarefa]
    this.setState({listaTarefas: copiaListaTarefas,})
  }

  
  marcarTarefa = (completa) => {
    completa = true
    if (completa) {
      return (
      <li id={this.props.id}><strike>{this.props.nome}</strike></li>
      );
    }
    console.log(completa)
  }


  render() {
    console.log(this.state.listaTarefas)
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <input id={Date.now()} value={this.state.inputTarefa} onChange={this.controleInputTarefas}/><button onClick={this.adicionarTarefa}>Adicionar</button><br/>
        <label>Filtro</label>
        <select>
          <option>Nenhum</option>
          <option>Pendentes</option>
          <option>Completas</option>
        </select>
        <ul>
          {this.state.listaTarefas.map(tarefa => {
            return (
            <Tarefa id={tarefa.id} nome={tarefa.texto} completa={tarefa.completa} aoClicar={this.marcarTarefa}/>
            )
          })}
        </ul>
      </div>
    );
  }
}



export default App;
