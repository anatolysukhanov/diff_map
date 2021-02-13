import React, { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useGoogleMap } from "@react-google-maps/api";

const MapControl = ({ position, children, zIndex = 0 }) => {
  const map = useGoogleMap();

  const [container] = useState(document.createElement("div"));

  React.useEffect(() => {
    const controlsContainer = map.controls[position];

    controlsContainer.push(container);

    return () => {
      const index = controlsContainer.indexOf(container);
      if (index !== -1) {
        controlsContainer.removeAt(index);
      }
    };
  }, [map]);

  React.useEffect(() => {
    container.style.zIndex = zIndex;
  }, [zIndex]);

  // console.log("Control render");

  return createPortal(children, container);
};

MapControl.propTypes = {
  // https://developers.google.com/maps/documentation/javascript/controls?hl=uk#ControlPositioning
  position: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number
};

export default React.memo(MapControl);
