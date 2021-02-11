import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";

import { toggleLayer, changeBuildingType } from "../actions";
import { buildingTypes } from "../data";

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
            options={buildingTypes}
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
