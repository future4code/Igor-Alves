import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import RedirectCard from "../../components/RedirectCard";
import PlusIcon from "../../resources/plusicon.png";
import PlanetIcon from "../../resources/planeticon.png";

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
        <RedirectCard onClick={this.props.goToCreateTripPage} title="Criar Viagem" img={PlusIcon}/>
        <RedirectCard onClick={this.props.goToListTripPage} title="Ver Viagens" img={PlanetIcon}/>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
      goToHomePage: () => dispatch(push(routes.root)),
      goToCreateTripPage: () => dispatch(push(routes.createTrip)),
      goToListTripPage: () => dispatch(push(routes.allTrips))
    }
}

export default connect(null, mapDispatchToProps)(AdminPanel);