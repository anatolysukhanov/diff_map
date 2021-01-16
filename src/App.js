import React, { Component } from "react";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import Map from "./Map";

import "./App.css";

class App extends Component {
  render = () => {
    const { dispatch, app } = this.props;
    return <Map id="json-deck" dispatch={dispatch} search={app.search} />;
  };
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(App);
