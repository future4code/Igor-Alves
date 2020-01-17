import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index"
import { getAllTrips } from "../../actions/trips"
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import { setSelectedTripId } from "../../actions/trips"


class ListTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }

    this.props.getAllTrips()
  }

  handleOnClickTrip = (tripId) => {
    this.props.setSelectedTripId(tripId)
    this.props.goToTripDetailsPage()
  }

  render() {
    return (
      <MainContainer>
        <Header>
          <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
          <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
        </Header>
        <Banner src={BannerImg}/>
        <div>
          {this.props.allTrips.map((trip) => (
            <div onClick={() => this.handleOnClickTrip(trip.id)}>
              <p>{trip.name}</p>
              <p>{trip.date}</p>
              <p>{trip.durationInDays}</p>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <br/>
            </div>
          ))}
      	</div>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  allTrips: state.trips.allTrips
});


const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  getAllTrips: () => dispatch(getAllTrips()),
  setSelectedTripId: (trip) => dispatch(setSelectedTripId(trip)),
  goToTripDetailsPage: () => dispatch(push(routes.tripDetails))
})



export default  connect(mapStateToProps, mapDispatchToProps)(ListTripPage);