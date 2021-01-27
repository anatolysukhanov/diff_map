import React, { Component } from "react";
import { Input, Label, Form, Button, Icon, Select } from "semantic-ui-react";

import { findParcels, toggleSearchPanel } from "../actions";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      parcelSize: "",
      siteCoverage: "",
      delta: ""
    };
  }

  changeAddress = event => {
    this.setState({ address: event.target.value });
  };

  changeParcelSize = event => {
    this.setState({ parcelSize: event.target.value });
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
        address: this.state.address,
        parcelSize: this.state.parcelSize,
        siteCoverage: this.state.siteCoverage,
        delta: this.state.delta
      })
    );
  };

  close = () => {
    this.props.dispatch(toggleSearchPanel());
    this.setState({
      address: "",
      parcelSize: "",
      siteCoverage: "",
      delta: ""
    });
  };

  render() {
    // error
    const { address, parcelSize, siteCoverage, delta } = this.state;
    return (
      <>
        <div>
          <Input
            id="address"
            type="text"
            size="mini"
            labelPosition="left"
            value={address}
            onChange={this.changeAddress}
          >
            <Label>Address</Label>
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Input
            id="parcel-size"
            type="number"
            size="mini"
            labelPosition="left"
            value={parcelSize}
            onChange={this.changeParcelSize}
          >
            <Label>Parcel Size &#8805;</Label>
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Input
            id="site-coverage"
            type="number"
            labelPosition="right"
            type="text"
            size="mini"
            value={siteCoverage}
            onChange={this.changeSiteCoverage}
          >
            <Label>Site Coverage &#60;</Label>
            <input autoComplete="off" />
            <Label>%</Label>
          </Input>
          &nbsp;
          <Input
            id="delta"
            type="number"
            labelPosition="right"
            type="text"
            size="mini"
            value={delta}
            onChange={this.changeDelta}
          >
            <Label>Delta &#8805;</Label>
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Button
            disabled={!address && !parcelSize && !siteCoverage && !delta}
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
