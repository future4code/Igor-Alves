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
import Button from "@material-ui/core/Button";
import TripDetailCard from "../../components/TripDetailCard/index"
import { GridTrip, ContainerTip, ContainerCandidate, CandidateItem } from "../../style/tripListDetails"


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
    } else if (this.props.selectedTripId === "") {
      this.props.goToTripList()
    }

    this.props.getTripDetail(this.props.selectedTripId)
  }

  handleShowCandidates = () => {
    this.setState({showCandidates: !this.state.showCandidates,})
  }

  handleShowApproved = () => {
    this.setState({showApproved: !this.state.showApproved,})
  }

  handleAproveCandidate = (tripId, candidateId, response) => {
    this.props.approveCandidate(tripId, candidateId, response)
  }

  render() {
    const { tripDetails } = this.props
    return (
      <MainContainer>
      <Header>
        <Logo src={LogoMarca} onClick={this.props.goToHomePage}/>
        <Logo src={LogoTipo} onClick={this.props.goToHomePage}/>
      </Header>
      <Banner src={BannerImg}/>
      <GridTrip>
        <TripDetailCard>
          <ContainerTip>
            <span>Nome: </span><span>{tripDetails.name}</span>
          </ContainerTip>
          <ContainerTip>
            <span>Data: </span><span>{tripDetails.date}</span>
          </ContainerTip>
          <ContainerTip>
            <span>Duração: </span><span>{tripDetails.durationInDays} dias</span>
          </ContainerTip>
          <ContainerTip>
            <span>Planeta: </span><span>{tripDetails.planet}</span>
          </ContainerTip>
          <ContainerTip>
            <span>Descrição: </span><span>{tripDetails.description}</span>
          </ContainerTip>
        <Button row="3em" color="primary" onClick={this.handleShowCandidates}>{ this.state.showCandidates ? "Ocultar Candidatos" : "Mostrar Candidatos"}</Button>
        { this.state.showCandidates && tripDetails.candidates.map( candidate => (
          <ContainerCandidate>
            <CandidateItem>
              <span>Nome: </span><p>{candidate.name}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Idade: </span><p>{candidate.age}</p>
            </CandidateItem>
            <CandidateItem>
              <span>País: </span><p>{candidate.country}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Profissão: </span><p>{candidate.profession}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Texto de aplicação: </span><p>{candidate.applicationText}</p>
            </CandidateItem>
            <Button color="primary" onClick={() => this.handleAproveCandidate(this.props.selectedTripId, candidate.id, true)}>Aprovar</Button>
            <Button color="primary" onClick={() => this.handleAproveCandidate(this.props.selectedTripId, candidate.id, false)}>Reprovar</Button>
          </ContainerCandidate>
        ))}
        <Button color="primary" onClick={this.handleShowApproved}>{ this.state.showApproved ? "Ocultar Aprovados" : "Mostrar Aprovados"}</Button>
        { this.state.showApproved && tripDetails.approved.map( candidate => (
          <ContainerCandidate>
            <CandidateItem>
              <span>Nome: </span><p>{candidate.name}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Idade: </span><p>{candidate.age}</p>
            </CandidateItem>
            <CandidateItem>
              <span>País: </span><p>{candidate.country}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Profissão: </span><p>{candidate.profession}</p>
            </CandidateItem>
            <CandidateItem>
              <span>Texto de aplicação: </span><p>{candidate.applicationText}</p>
            </CandidateItem>
          </ContainerCandidate>
        ))}
        </TripDetailCard>
      </GridTrip>
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
  approveCandidate: (tripId, candidateId, response) => dispatch(approveCandidate(tripId, candidateId, response))
})



export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);