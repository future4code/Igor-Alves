import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index"
import { getAllTrips } from "../../actions/trips"

class ListTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.getAllTrips()
  }

  render() {
    return (
      	<div>
          {this.props.allTrips.map((trip) => (
            <div>
              <li>{trip.name}</li>
              <li>{trip.date}</li>
              <li>{trip.durationInDays}</li>
              <li>{trip.description}</li>
              <li>{trip.planet}</li>
            </div>
          ))}
          <p onClick={this.props.changePage}>ListTripPage</p>
      	</div>
    );
  }
}

const mapStateToProps = state => ({
  allTrips: state.trips.allTrips
});


const mapDispatchToProps = dispatch => ({
  changePage: () => dispatch(push(routes.root)),
  getAllTrips: () => dispatch(getAllTrips()),
})

export default  connect(mapStateToProps, mapDispatchToProps)(ListTripPage);