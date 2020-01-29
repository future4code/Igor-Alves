import React from "react";
import { connect } from "react-redux";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input name="text" onChange={this.handleInputChange} value={this.state.form.text}></input>
          <select name="day" onChange={this.handleInputChange} value={this.state.form.day} >
            <option value="Segunda">Segunda-Feira</option>
            <option value="Terça">Terça-Feira</option>
            <option value="Quarta">Quarta-Feira</option>
            <option value="Quinta">Quinta-Feira</option>
            <option value="Sexta">Sexta-Feira</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
          <button>Criar</button>
        </form>
        {/* Aqui vai entrar o container do planner onde irá conter o componente de cada dia da semana, que por sua vez vai conter o componente de tarefa. */}
      </div>
    )
  }
}

export default connect()(HomePage);
