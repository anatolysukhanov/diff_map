import React, { PureComponent } from "react";

class LegendControl extends PureComponent {
  render() {
    const { title, values } = this.props;
    return (
      <div className="custom-control">
        <div className="legend-title">{title}</div>
        {values.map((value, index) => (
          <div key={index}>
            <span
              className="legend-key"
              style={{ backgroundColor: value.color }}
            ></span>
            <span>{value.value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default React.memo(LegendControl);
