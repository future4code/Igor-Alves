import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Header, Logo, Banner, MainContainer } from "../../style/global";
import LogoMarca from "../../resources/Iconefuturex.png";
import LogoTipo from "../../resources/logotipofuturex.png";
import BannerImg from "../../resources/banner.jpg";
import { routes } from "../Router";
import { getTripDetail } from "../../actions/trips"
import { approveCandidate } from "../../actions/user"

const aprovar = true;
const reprovar = false;

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCandidates: false,
      showApproved: false,
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }

    this.props.getTripDetail(this.props.selectedTripId)
  }

  handleShowCandidates = () => {
    this.setState({showCandidates: !this.state.showCandidates,})
  }

  handleShowApproved = () => {
    this.setState({showApproved: !this.state.showApproved,})
  }

  handleAproveCandidate = (tripId, candidateId, aprovar) => {
    this.props.approveCandidate(tripId, candidateId, aprovar)
  }

  render() {
    const { tripDetails } = this.props
    // console.log(this.props.tripDetails.candidate.id)
    return (
      <MainContainer>
      <Header>
        <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
        <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
      </Header>
      <Banner src={BannerImg}/>
      <p>{tripDetails.name}</p>
      <p>{tripDetails.description}</p>
      <p>{tripDetails.planet}</p>
      <p>{tripDetails.date}</p>
      <p>{tripDetails.durationInDays}</p><br/>
      <button onClick={this.handleShowCandidates}>Mostrar Candidatos</button>
      { this.state.showCandidates && tripDetails.candidates.map( candidate => (
        <div>
          <p>{candidate.name}</p>
          <p>{candidate.age}</p>
          <p>{candidate.profession}</p>
          <p>{candidate.applicationText}</p>
          <p>{candidate.country}</p>
          <button onClick={() => this.handleAproveCandidate(this.props.selectedTripId, candidate.id, aprovar)}>Aprovar</button>
          <button onClick={() => this.handleAproveCandidate(this.props.selectedTripId, candidate.id, reprovar)}>Reprovar</button>
        </div>
      ))}
      <button onClick={this.handleShowApproved}>Aprovados</button>
      { this.state.showApproved && tripDetails.approved.map( candidate => (
        <div>
          <p>{candidate.name}</p>
          <p>{candidate.age}</p>
          <p>{candidate.profession}</p>
          <p>{candidate.applicationText}</p>
          <p>{candidate.country}</p>
        </div>
      ))}
    </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  selectedTripId: state.trips.selectedTripId,
  tripDetails: state.trips.tripDetails,
});

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  goToTripList: () => dispatch(push(routes.allTrips)),
  getTripDetail: (tripId) => dispatch(getTripDetail(tripId)),
  approveCandidate: (tripId, candidateId, aprovar) => dispatch(approveCandidate(tripId, candidateId, aprovar))
})



export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);