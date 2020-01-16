import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";


class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }
  }

  render() {
    return (
      <MainContainer>
        <Header>
          <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
          <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
        </Header>
        <Banner src={BannerImg}/>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
      goToHomePage: () => dispatch(push(routes.root)),
      goToLoginPage: () => dispatch(push(routes.login)),
      goToRegisterPage: () => dispatch(push(routes.register))
    }
}

export default connect(null, mapDispatchToProps)(AdminPanel);