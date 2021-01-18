import React, { Component } from "react";
import { Input, Label, Form, Button, Icon, Select } from "semantic-ui-react";

import {
  changeParcelSize,
  changeSiteCoverage,
  findParcels,
  toggleSearchPanel
} from "../actions";

/*const options = [
  { key: "parcels", text: "Parcel Size", value: "parcels" },
  { key: "coverage", text: "Site Cover %", value: "coverage" }
];*/

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parcelSize: "",
      siteCoverage: "",
      delta: ""
    };
  }

  changeParcelSize = event => {
    this.setState({ parcelSize: event.target.value });
    // this.props.dispatch(changeParcelSize(event.target.value));
  };

  changeSiteCoverage = event => {
    this.setState({ siteCoverage: event.target.value });
  };

  changeDelta = event => {
    this.setState({ delta: event.target.value });
  };

  search = () => {
    this.props.dispatch(
      findParcels({
        parcelSize: this.state.parcelSize,
        siteCoverage: this.state.siteCoverage,
        delta: this.state.delta
      })
    );
  };

  close = () => {
    console.log("close search clicked");
    this.props.dispatch(toggleSearchPanel());
    this.setState({
      parcelSize: "",
      siteCoverage: "",
      delta: ""
    });
  };

  render() {
    // error
    const { parcelSize, siteCoverage, delta } = this.state;
    return (
      <>
        <div>
          <Input
            size="mini"
            labelPosition="left"
            id="parcel-size"
            type="number"
            value={parcelSize}
            onChange={this.changeParcelSize}
          >
            <Label>Parcel Size &#8805;</Label>
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Input
            labelPosition="right"
            type="text"
            size="mini"
            id="site-coverage"
            type="number"
            value={siteCoverage}
            onChange={this.changeSiteCoverage}
          >
            <Label>Site Coverage &#60;</Label>
            <input autoComplete="off" />
            <Label>%</Label>
          </Input>
          &nbsp;
          <Input
            labelPosition="right"
            type="text"
            size="mini"
            id="delta"
            type="number"
            value={delta}
            onChange={this.changeDelta}
          >
            <Label>Delta &#8805;</Label>
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Button
            disabled={!parcelSize && !siteCoverage && !delta}
            size="mini"
            onClick={this.search}
          >
            Search
          </Button>
        </div>
        <Button icon size="mini" onClick={this.close}>
          <Icon name="close" />
        </Button>
      </>
    );
  }
}
