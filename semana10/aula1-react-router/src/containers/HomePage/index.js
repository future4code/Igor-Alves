import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
          <p onClick={this.props.goToPage}>HomePage</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
      goToPage: () => dispatch(push(routes.login))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);