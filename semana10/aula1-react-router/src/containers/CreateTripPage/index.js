import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import { routes } from "../Router";
import { createTrip } from "../../actions/trips"

const CreateTripForm = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    required: true,
    pattern: "[a-zA-z]{5,}",
  },
  {
    name: "date",
    type: "text",
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
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
  };

  sendFormData = () => {
    const { form } = this.state;
    this.props.createTrip(form)
  }


  render() {
    console.log(this.state.form)
    return (
      <MainContainer>
      <Header>
        <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
        <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
      </Header>
      <Banner src={BannerImg}/>
      <div>
        <form onSubmit={this.handleOnSubmit}>
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
          <select name="planet" onChange={this.handleInputChange} value={this.state.form.planet}>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </select>
          <button onClick={this.sendFormData}>Enviar</button>
        </form>
      </div>
    </MainContainer>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  createTrip: (form) => dispatch(createTrip(form))
})


export default connect(null, mapDispatchToProps)(CreateTripPage);