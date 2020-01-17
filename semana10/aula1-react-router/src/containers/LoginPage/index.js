import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { routes } from "../Router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import LoginCard from "../../components/LoginCard"
import { LoginWrapper } from "../../style/loginPage";
import { autenticateLogin } from "../../actions/user"


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sendLoginData = () => {
    const { email, password } = this.state;
    this.props.autenticateLogin(email, password)
  }

  render() {
    const { email, password } = this.state;
    return (
      <MainContainer>
        <Header>
          <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
          <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
        </Header>
        <Banner src={BannerImg}/>
        <LoginCard>
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
            />
            <TextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              value={password}
            />
            <Button color="primary" size="large" onClick={this.sendLoginData}>Login</Button>
          </LoginWrapper>
        </LoginCard>
      </MainContainer>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  goToListTripPage: () => dispatch(push(routes.allTrips)),
  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
})


export default connect(null, mapDispatchToProps)(LoginPage);
