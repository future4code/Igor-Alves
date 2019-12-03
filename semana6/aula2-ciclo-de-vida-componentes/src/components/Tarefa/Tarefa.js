import React from 'react';
import './Tarefa.css';


class Tarefa extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  aoClicarNaTarefa = (e) => {
    console.log("tarefa")
    this.props.aoClicar(this.props.completa)
  }

  render() {
    return (
    <li id={this.props.id} onClick={this.aoClicarNaTarefa}>{this.props.nome}</li>
    );
  }
}

export default Tarefa;
