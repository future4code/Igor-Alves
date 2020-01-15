import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Header, Logo, Banner, ContainerHome } from "../../style/homePage";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import RedirectCard from "../../components/RedirectCard";
import RocketIcon from "../../resources/rocketicon.png";
import UserIcon from "../../resources/usericon.png";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ContainerHome>
          <Header>
            <Logo src={LogoMarca}></Logo>
            <Logo src={LogoTipo}></Logo>
          </Header>
          <Banner src={BannerImg}/>
          <RedirectCard onClick={this.props.goToLoginPage} title="Entrar" img={UserIcon}/>
          <RedirectCard onClick={this.props.goToRegisterPage} title="Inscreva-se" img={RocketIcon}/>
      </ContainerHome>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
      goToLoginPage: () => dispatch(push(routes.login)),
      goToRegisterPage: () => dispatch(push(routes.register))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);