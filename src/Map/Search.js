import React, { Component } from "react";
import { Input, Label, Button, Icon, Dropdown } from "semantic-ui-react";
import axios from "axios";
import { SemanticToastContainer, toast } from "react-semantic-toasts";

import { findParcels, toggleSearchPanel } from "../actions";
import { buildingTypes } from "../data";

const zoneTypes = [
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
      zoneType: "",
      buildingType: ""
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

  changeBuildingType = (e, { value }) => this.setState({ buildingType: value });

  search = () => {
    (async () => {
      try {
        let query = [];
        if (this.state.address) {
          query.push(`address=${this.state.address}`);
        }
        if (this.state.parcelSize) {
          query.push(`area=${this.state.parcelSize}`);
        }
        if (this.state.siteCoverage) {
          query.push(`coverage=${this.state.siteCoverage}`);
        }
        if (this.state.delta) {
          query.push(`delta=${this.state.delta}`);
        }
        if (this.state.zoneType) {
          query.push(`zone_type=${this.state.zoneType}`);
        }
        if (this.state.buildingType) {
          query.push(`building_type=${this.state.buildingType}`);
        }
        await axios
          //.get(`http://localhost/export.php?${query.join("&")}`)
          .get(`export.php?${query.join("&")}`)
          .then(response => {
            const type = response.headers["content-type"];
            const blob = new Blob([response.data], {
              type: type,
              encoding: "UTF-8"
            });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = `${+new Date()}.csv`;
            link.click();
          });
      } catch (err) {
        if (err.response.status === 404) {
          console.log("No results");
          toast({
            type: "info",
            size: "mini",
            color: "blue",
            icon: "search",
            title: "Search",
            description: "No results",
            time: 1500
          });
        }
      }
    })();

    this.props.dispatch(
      findParcels({
        address: this.state.address,
        parcelSize: this.state.parcelSize,
        siteCoverage: this.state.siteCoverage,
        delta: this.state.delta,
        zoneType: this.state.zoneType,
        buildingType: this.state.buildingType
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
      zoneType: "",
      buildingType: ""
    });
  };

  render() {
    const {
      address,
      parcelSize,
      siteCoverage,
      delta,
      zoneType,
      buildingType
    } = this.state;
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
            placeholder="Choose type"
            options={zoneTypes}
            value={zoneType}
            onChange={this.changeZoneType}
          />
          &nbsp;
          <Label>Building Type</Label>
          <Dropdown
            clearable
            search
            selection
            placeholder="Choose type"
            options={buildingTypes}
            value={buildingType}
            onChange={this.changeBuildingType}
          />
          &nbsp;
          <Button
            disabled={
              !address &&
              !parcelSize &&
              !siteCoverage &&
              !delta &&
              !zoneType &&
              !buildingType
            }
            onClick={this.search}
          >
            Search
          </Button>
        </div>
        <Button icon size="mini" onClick={this.close}>
          <Icon name="close" />
        </Button>
        <SemanticToastContainer className="toast-container" />
      </>
    );
  }
}
