import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import { routes } from "../Router";
import { createTrip } from "../../actions/trips";
import FormCard from "../../components/FormCard";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import { ContainerSelect, Title } from "../../style/forms";


const CreateTripForm = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    pattern: "[a-zA-z]{5,}",
  },
  {
    name: "date",
    type: "text",
    label: "Data",
    pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$",
    min: `${new Date().getDate() + 1}/${new Date().getMonth()}/${new Date().getFullYear()} `,
  },
  {
    name: "description",
    type: "text",
    label: "Descrição",
    pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}",      
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração em dias",
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
    return (
      <MainContainer>
      <Header>
        <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
        <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
      </Header>
      <Banner src={BannerImg}/>
      <FormCard>
        <Title>Criar Nova Viagem</Title>
        <form onSubmit={this.handleOnSubmit}>
          {CreateTripForm.map( input => (
            <div key={input.name}>
              <TextField
                id={input.name}
                name={input.name}
                label={input.label}
                type={input.type}
                value={this.state.form[input.name] || ""}
                onChange={this.handleInputChange}
                pattern={input.pattern}
                required
                fullWidth
              />
            </div>
          ))}
          <ContainerSelect>
            <Select name="planet" onChange={this.handleInputChange} value={this.state.form.planet} fullWidth native required>
            <option>Planetas*</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
          </Select>
          </ContainerSelect>
          <Button fullWidth color="primary" size="large" onClick={this.sendFormData}>Enviar</Button>
        </form>
      </FormCard>
    </MainContainer>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  createTrip: (form) => dispatch(createTrip(form))
})


export default connect(null, mapDispatchToProps)(CreateTripPage);