import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const CreateTripForm = [
  {
    name: "tripname",
    type: "text",
    label: "Nome",
    required: true,
    pattern: "[a-zA-z]{5,}",
  },
  {
    name: "date",
    type: "date",
    label: "Data",
    required: true,
    pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$",
    min: `${new Date().getDate() + 1}/${new Date().getMonth()}/${new Date().getFullYear()} `,
  },
  {
    name: "description",
    type: "text",
    label: "Descrição",
    required: true,
    pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}",      
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração em dias",
    required: true,
    pattern: "[0-9]+$",
    min: "50",
  },
]


class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      selectPlanet: {},
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
  };

  handleDropdownChange = event => {
    const selectedValue = event.target.value;

    this.setState({ selectPlanet: selectedValue})
  }

  render() {
    return (
      <div>
        {CreateTripForm.map( input => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}: </label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.handleInputChange}
              pattern={input.pattern}
            />
          </div>
        ))}
        <label for="planet">Planeta: </label>
        <select name="planet" id="planet" onChange={this.handleDropdownChange} value={this.state.selectPlanet}>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
        </select>
        <button onClick={this.handleOnSubmit}>Enviar</button>
      </div>
    );
  }
}

export default CreateTripPage;