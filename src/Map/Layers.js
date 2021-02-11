import React, { Component } from "react";

import { toggleLayer, changeBuildingType } from "../actions";
import { Button, Dropdown } from "semantic-ui-react";

const options = [
  { text: "AMENITY", value: "AMENITY" },
  { text: "CARPORT", value: "CARPORT" },
  { text: "CHURCH", value: "CHURCH" },
  { text: "COMMERCIAL BUILDING", value: "COMMERCIAL BUILDING" },
  { text: "COMMUNITY CENTRE", value: "COMMUNITY CENTRE" },
  { text: "FARM BUILDING", value: "FARM BUILDING" },
  { text: "FIRE", value: "FIRE" },
  { text: "GOLF", value: "GOLF" },
  {
    text: "GOVERNMENT HERITAGE BUILDING",
    value: "GOVERNMENT HERITAGE BUILDING"
  },
  { text: "INDUSTRIAL BUILDING", value: "INDUSTRIAL BUILDING" },
  { text: "LIBRARY", value: "LIBRARY" },
  { text: "MIXED USE", value: "MIXED USE" },
  { text: "MOSQUE", value: "MOSQUE" },
  { text: "MULTI FAMILY", value: "MULTI FAMILY" },
  { text: "MUNICIPAL HALL", value: "MUNICIPAL HALL" },
  { text: "MUSEUM", value: "MUSEUM" },
  { text: "OPERATIONS CENTRE", value: "OPERATIONS CENTRE" },
  { text: "OTHER", value: "OTHER" },
  { text: "PARK BUILDING", value: "PARK BUILDING" },
  { text: "POLICE", value: "POLICE" },
  { text: "RECREATION FACILITY", value: "RECREATION FACILITY" },
  { text: "RECYCLING BUILDING", value: "RECYCLING BUILDING" },
  { text: "SCHOOL", value: "SCHOOL" },
  { text: "SHED", value: "SHED" },
  { text: "SINGLE FAMILY", value: "SINGLE FAMILY" },
  { text: "SKI", value: "SKI" },
  { text: "STABLES", value: "STABLES" },
  { text: "TRANSPORT BUILDING", value: "TRANSPORT BUILDING" },
  { text: "UTILITY BUILDING", value: "UTILITY BUILDING" }
];

export default class Layers extends Component {
  /*constructor(props) {
    super(props);
  }*/

  handleChange = (layer, checked) => {
    this.props.dispatch(toggleLayer(layer, checked));
  };

  handleBuildingTypeChange = (e, { value }) =>
    this.props.dispatch(changeBuildingType(value));

  render() {
    const { layers, isSidebarVisible, buildingType } = this.props;
    return (
      <div className="toggle-layers">
        <div className="toggle-layer">
          <div>Parcels</div>
          <input
            type="checkbox"
            name="parcels"
            checked={layers.includes("parcels")}
            onChange={e => {
              this.handleChange(e.target.name, e.target.checked);
            }}
            disabled={isSidebarVisible}
          />
        </div>
        <div className="toggle-layer">
          <div>Buildings</div>
          <input
            type="checkbox"
            name="buildings"
            checked={layers.includes("buildings")}
            onChange={e => {
              this.handleChange(e.target.name, e.target.checked);
            }}
          />
        </div>
        <div className="ui form mini">
          <Dropdown
            clearable
            search
            selection
            placeholder="Choose building type"
            className={
              layers.includes("buildings") === true
                ? "ui dropdown"
                : "ui disabled dropdown"
            }
            options={options}
            value={buildingType}
            onChange={this.handleBuildingTypeChange}
          />
        </div>
        <div className="toggle-layer">
          <div>Zoning</div>
          <input
            type="checkbox"
            name="zoning"
            checked={layers.includes("zoning")}
            onChange={e => {
              this.handleChange(e.target.name, e.target.checked);
            }}
          />
        </div>
        <div className="toggle-layer">
          <div>OCP</div>
          <input
            type="checkbox"
            name="ocp"
            checked={layers.includes("ocp")}
            onChange={e => {
              this.handleChange(e.target.name, e.target.checked);
            }}
          />
        </div>
      </div>
    );
  }
}
