import React, { Component } from "react";
import { Input, Label, Button, Icon, Dropdown } from "semantic-ui-react";

import { findParcels, toggleSearchPanel } from "../actions";

const options = [
  { text: "CD", value: "CD" },
  { text: "CM", value: "CM" },
  { text: "CO", value: "CO" },
  { text: "IN", value: "IN" },
  { text: "NB", value: "NB" },
  { text: "PA", value: "PA" },
  { text: "PR", value: "PR" },
  { text: "PRK", value: "PRK" },
  { text: "RM", value: "RM" },
  { text: "RS", value: "RS" }
];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      parcelSize: "",
      siteCoverage: "",
      delta: "",
      zoneType: ""
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

  changeZoneType = (e, { value }) => this.setState({ zoneType: value });

  search = () => {
    this.props.dispatch(
      findParcels({
        address: this.state.address,
        parcelSize: this.state.parcelSize,
        siteCoverage: this.state.siteCoverage,
        delta: this.state.delta,
        zoneType: this.state.zoneType
      })
    );
  };

  close = () => {
    this.props.dispatch(toggleSearchPanel());
    this.setState({
      address: "",
      parcelSize: "",
      siteCoverage: "",
      delta: "",
      zoneType: ""
    });
  };

  render() {
    const { address, parcelSize, siteCoverage, delta, zoneType } = this.state;
    return (
      <>
        <div className="ui form mini">
          <Label>Address</Label>
          <Input
            id="address"
            type="text"
            labelPosition="left"
            placeholder="Enter address"
            value={address}
            onChange={this.changeAddress}
          >
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Label>Parcel Size &#8805;</Label>
          <Input
            id="parcel-size"
            type="number"
            labelPosition="left"
            value={parcelSize}
            onChange={this.changeParcelSize}
          >
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Label>Site Coverage &#60;</Label>
          <Input
            id="site-coverage"
            type="number"
            labelPosition="right"
            value={siteCoverage}
            onChange={this.changeSiteCoverage}
          >
            <input autoComplete="off" />
            <Label>%</Label>
          </Input>
          &nbsp;
          <Label>Delta &#8805;</Label>
          <Input
            id="delta"
            type="number"
            labelPosition="right"
            value={delta}
            onChange={this.changeDelta}
          >
            <input autoComplete="off" />
          </Input>
          &nbsp;
          <Label>Zone Type</Label>
          <Dropdown
            clearable
            search
            selection
            placeholder="Choose zone type"
            options={options}
            value={zoneType}
            onChange={this.changeZoneType}
          />
          &nbsp;
          <Button
            disabled={
              !address && !parcelSize && !siteCoverage && !delta && !zoneType
            }
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
