import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { CartoSQLLayer, setDefaultCredentials } from "@deck.gl/carto";

import LegendControl from "./Legend";

import Search from "./Map/Search";

setDefaultCredentials({
  username: "anatolysukhanov",
  apiKey: "efae24f5d54f80890dff448d2cff5b958f658e39"
});

const GOOGLE_MAPS_TOKEN = "AIzaSyD6L9qpPAS-M340DzgHfIkzBWvtKy7OsRw";

const HOST = "https://maps.googleapis.com/maps/api/js";
const LOADING_GIF =
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif";

function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", e => reject(e.error));
    document.head.appendChild(script);
  });
}

function loadGoogleMapApi(apiKey, onComplete) {
  const url = `${HOST}?key=${apiKey}&libraries=places`;
  injectScript(url)
    .then(() => onComplete())
    // eslint-disable-next-line no-console
    .catch(e => console.error(e));
}

class DeckWithGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleMapsLoaded: window.google && window.google.maps
    };
  }

  componentDidMount() {
    if (!window.google || (window.google && !window.google.maps)) {
      loadGoogleMapApi(GOOGLE_MAPS_TOKEN, () => {
        this.setState({ googleMapsLoaded: true });
      });
    }
  }

  render() {
    const { googleMapsLoaded } = this.state;
    console.log("DeckWithGoogleMaps render", googleMapsLoaded);
    if (!googleMapsLoaded) {
      return <img src={LOADING_GIF} alt="Loading Google Maps overlay..." />;
    }

    return <DeckOverlayWrapper {...this.props} />;
  }
}

class DeckOverlayWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOverlayConfigured: false
      tooltipContent: ""
    };

    this.deckOverlay = new GoogleMapsOverlay({
      layers: [
        new CartoSQLLayer({
          id: "parcels",
          //data: "parcels",
          data: "select * from parcels where area > 500000",
          opacity: 1,
          getFillColor: [0, 255, 255],
          lineWidthUnits: "pixels",
          getLineWidth: 1,
          lineWidthMinPixels: 1,
          pickable: true,
          autoHighlight: true,
          onHover: e => this.setTooltip("parcels", e),
          onViewportLoad: () => console.log("onViewportLoad")
        })
      ]
    });
    this.containerRef = React.createRef();
  }

  setTooltip = (layer, { x, y, object }) => {
    if (object) {
      let content = "";
      if (layer === "parcels") {
        content = object.properties.area.toFixed(0); // + " ft&#178;"; // convert square meters to square feet
      } else if (layer === "buildings") {
        content =
          object.properties.address !== undefined
            ? object.properties.address + ` (${object.properties.bldgtype})`
            : object.properties.bldgtype;
      } else if (layer === "zones" || layer === "ocp") {
        content = object.properties.fsr;
      } else {
        content = object.properties.delta;
      }
      this.setState({ tooltipContent: content, tooltipX: x, tooltipY: y });
    } else {
      this.setState({ tooltipContent: "" });
    }
  };

  componentDidMount() {
    // const { layers } = this.props;
    const map = new window.google.maps.Map(this.containerRef.current, {
      center: {
        lat: 49.353,
        lng: -123.005
      },
      // mapTypeId: this.props.mapTypeId || "satellite",
      zoom: 13,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetViewControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_BOTTOM
      },
      rotateControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_BOTTOM
      }
    });
    this.deckOverlay.setMap(map);

    const controlButtonDiv = document.createElement("div");
    ReactDOM.render(
      <Search dispatch={this.props.dispatch} />,
      controlButtonDiv
    );
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlButtonDiv
    );

    map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
      new LegendControl(
        "DELTA",
        [">= -1.95", ">= -1.1", ">= -0.25", ">= 0.6", ">= 1.45", ">= 2.3"],
        ["#CCF5F5", "#A6C6D3", "#8097B1", "#5A6890", "#34396E", "#0E0B4D"]
      ).getContainer()
    );

    map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
      new LegendControl(
        "OCP",
        ["0", "0.35", "0.55", "0.8", "1", "1.2", "1.75", "2.5", "3.5"],
        [
          "#F5CCCC",
          "#E4B4B6",
          "#D39CA1",
          "#C2858B",
          "#B26D76",
          "#A15561",
          "#903E4B",
          "#7F2636",
          "#6F0F21"
        ]
      ).getContainer()
    );

    map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
      new LegendControl(
        "ZONES",
        ["0", "0.35", "1.3", "2.5"],
        ["#11ED30", "#12B123", "#137616", "#143B0A"]
      ).getContainer()
    );

    map.addListener("tilt_changed", () => {
      if (map.getTilt() === 45) {
        this.deckOverlay.setMap(null);
      } else {
        setTimeout(() => this.deckOverlay.setMap(map), 500);
      }
    });

    // this.deckOverlay.setProps({ layers });

    // eslint-disable-next-line react/no-did-mount-set-state
    // this.setState({ isOverlayConfigured: true });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("new search?", prevProps.search !== this.props.search);
    if (prevProps.search !== this.props.search)
      this.deckOverlay.setProps({
        layers: [
          new CartoSQLLayer({
            id: "parcels",
            //data: "parcels",
            data: `select * from parcels where area >= ${this.props.search}`,
            opacity: 1,
            getFillColor: [0, 255, 255],
            lineWidthUnits: "pixels",
            getLineWidth: 1,
            lineWidthMinPixels: 1,
            pickable: true,
            autoHighlight: true,
            onHover: e => this.setTooltip("parcels", e),
            onViewportLoad: () => console.log("onViewportLoad2")
          })
        ]
      });
  }

  componentWillUnmount() {
    delete this.deckOverlay;
  }

  render() {
    const { tooltipContent, tooltipX, tooltipY } = this.state;
    return (
      <>
        <div
          ref={this.containerRef}
          style={{
            height: "100%",
            width: "100%"
          }}
        />
        {tooltipContent && (
          <div
            className="tooltip"
            style={{
              left: tooltipX + "px",
              top: tooltipY + "px"
            }}
          >
            {tooltipContent} ft&#178;
          </div>
        )}
      </>
    );
  }
}

export default DeckWithGoogleMaps;
