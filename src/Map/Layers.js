import React, { Component } from "react";

import { toggleLayer } from "../actions";

export default class Layers extends Component {
  /*constructor(props) {
    super(props);
  }*/

  handleChange = layer => {
    this.props.dispatch(toggleLayer(layer));
  };

  render() {
    const { layers, isSidebarVisible } = this.props;
    return (
      <div className="toggle-layers">
        <div className="toggle-layer">
          <div>Parcels</div>
          <input
            type="checkbox"
            name="parcels"
            checked={layers.includes("parcels")}
            onChange={e => {
              this.handleChange(e.target.name);
              // e.target.checked
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
              this.handleChange(e.target.name);
            }}
          />
        </div>
        <div className="toggle-layer">
          <div>Zoning</div>
          <input
            type="checkbox"
            name="zoning"
            checked={layers.includes("zoning")}
            onChange={e => {
              this.handleChange(e.target.name);
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
              this.handleChange(e.target.name);
            }}
          />
        </div>
      </div>
    );
  }
}
