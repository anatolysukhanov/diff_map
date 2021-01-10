let visibleLayers = ["parcels", "buildings", "zones", "ocp", "delta"];

class LegendControl {
  constructor(title, layers, colors) {
    this.title = title;
    this.layers = layers;
    this.colors = colors;
  }

  getContainer() {
    this._container = document.createElement("div");
    this._container.id = "legend";
    this._container.className = "custom-control";

    let title = document.createElement("div");
    title.textContent = this.title;
    title.className = "legend-title";
    this._container.appendChild(title);

    for (let i = 0; i < this.layers.length; i++) {
      let layer = this.layers[i];
      let color = this.colors[i];
      let item = document.createElement("div");
      let key = document.createElement("span");
      key.className = "legend-key";
      key.style.backgroundColor = color;

      let value = document.createElement("span");
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      this._container.appendChild(item);
    }

    return this._container;
  }
}

function CustomControl(
  controlDiv,
  deckOverlay,
  parcelsLayer,
  buildingsLayer,
  zonesLayer,
  ocpLayer,
  deltaLayer
) {
  const controlUI = document.createElement("div");
  controlUI.className = "custom-control";

  let controlItem = document.createElement("div");
  controlItem.className = "row";
  let controlItemLabel = document.createElement("div");
  controlItemLabel.textContent = "Parcels";
  controlItem.appendChild(controlItemLabel);

  let controlItemInput = document.createElement("input");
  controlItemInput.type = "checkbox";
  controlItemInput.checked = true;
  controlItemInput.addEventListener("click", event => {
    if (event.target.checked) {
      visibleLayers.push("parcels");
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({ visible: true }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    } else {
      const index = visibleLayers.indexOf("parcels");
      if (index !== -1) {
        visibleLayers.splice(index, 1);
      }
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({ visible: false }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    }
  });
  controlItem.appendChild(controlItemInput);
  controlUI.appendChild(controlItem);

  controlItem = document.createElement("div");
  controlItem.className = "row";
  controlItemLabel = document.createElement("div");
  controlItemLabel.textContent = "Buildings";
  controlItem.appendChild(controlItemLabel);

  controlItemInput = document.createElement("input");
  controlItemInput.type = "checkbox";
  controlItemInput.checked = true;
  controlItemInput.addEventListener("click", event => {
    if (event.target.checked) {
      visibleLayers.push("buildings");
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({ visible: true }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    } else {
      const index = visibleLayers.indexOf("buildings");
      if (index !== -1) {
        visibleLayers.splice(index, 1);
      }
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({ visible: false }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    }
  });
  controlItem.appendChild(controlItemInput);
  controlUI.appendChild(controlItem);

  controlItem = document.createElement("div");
  controlItem.className = "row";
  controlItemLabel = document.createElement("div");
  controlItemLabel.textContent = "Zoning";
  controlItem.appendChild(controlItemLabel);

  controlItemInput = document.createElement("input");
  controlItemInput.type = "checkbox";
  controlItemInput.checked = true;
  controlItemInput.addEventListener("click", event => {
    if (event.target.checked) {
      visibleLayers.push("zones");
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: true }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    } else {
      const index = visibleLayers.indexOf("zones");
      if (index !== -1) {
        visibleLayers.splice(index, 1);
      }
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: false }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    }
  });
  controlItem.appendChild(controlItemInput);
  controlUI.appendChild(controlItem);

  controlItem = document.createElement("div");
  controlItem.className = "row";
  controlItemLabel = document.createElement("div");
  controlItemLabel.textContent = "OCP";
  controlItem.appendChild(controlItemLabel);

  controlItemInput = document.createElement("input");
  controlItemInput.type = "checkbox";
  controlItemInput.checked = true;
  controlItemInput.addEventListener("click", event => {
    if (event.target.checked) {
      visibleLayers.push("ocp");
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: true }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    } else {
      const index = visibleLayers.indexOf("ocp");
      if (index !== -1) {
        visibleLayers.splice(index, 1);
      }
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: false }),
          deltaLayer.clone({ visible: visibleLayers.indexOf("delta") !== -1 })
        ]
      });
    }
  });
  controlItem.appendChild(controlItemInput);
  controlUI.appendChild(controlItem);

  controlItem = document.createElement("div");
  controlItem.className = "row";
  controlItemLabel = document.createElement("div");
  controlItemLabel.textContent = "Delta";
  controlItem.appendChild(controlItemLabel);

  controlItemInput = document.createElement("input");
  controlItemInput.type = "checkbox";
  controlItemInput.checked = true;
  controlItemInput.addEventListener("click", event => {
    if (event.target.checked) {
      visibleLayers.push("delta");
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: true })
        ]
      });
    } else {
      const index = visibleLayers.indexOf("delta");
      if (index !== -1) {
        visibleLayers.splice(index, 1);
      }
      deckOverlay.setProps({
        layers: [
          parcelsLayer.clone({
            visible: visibleLayers.indexOf("parcels") !== -1
          }),
          buildingsLayer.clone({
            visible: visibleLayers.indexOf("buildings") !== -1
          }),
          zonesLayer.clone({ visible: visibleLayers.indexOf("zones") !== -1 }),
          ocpLayer.clone({ visible: visibleLayers.indexOf("ocp") !== -1 }),
          deltaLayer.clone({ visible: false })
        ]
      });
    }
  });
  controlItem.appendChild(controlItemInput);
  controlUI.appendChild(controlItem);

  controlDiv.appendChild(controlUI);
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.353, lng: -123.005 },
    zoom: 13,
    // mapTypeId: "satellite",
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    rotateControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });

  const input = document.createElement("input");
  input.id = "pac-input";
  input.className = "controls";
  input.type = "text";
  input.placeholder = "Search Box";

  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  deck.carto.setDefaultCredentials({
    username: "anatolysukhanov",
    apiKey: "efae24f5d54f80890dff448d2cff5b958f658e39"
  });

  function setTooltip({ x, y, object }) {
    const tooltip = document.getElementById("tooltip");
    if (object) {
      tooltip.style.display = "block";
      tooltip.style.left = x + "px";
      tooltip.style.top = y + "px";
      tooltip.innerHTML = object.properties.fsr ? object.properties.fsr : object.properties.delta;
    } else {
      tooltip.style.display = "none";
    }
  }

  const deckOverlay = new deck.GoogleMapsOverlay();

  const parcelsLayer = new deck.carto.CartoSQLLayer({
    id: "parcels",
    data: "parcels",
    opacity: 1,
    getFillColor: [0, 255, 255],
    lineWidthUnits: "pixels",
    getLineWidth: 1,
    lineWidthMinPixels: 1,
    pickable: true
  });

  const buildingsLayer = new deck.carto.CartoSQLLayer({
    id: "buildings",
    data: "buildings",
    opacity: 1,
    getFillColor: [150, 75, 0],
    lineWidthUnits: "pixels",
    getLineWidth: 1,
    lineWidthMinPixels: 1
  });

  const zonesLayer = new deck.carto.CartoSQLLayer({
    id: "zones",
    data: "zones",
    opacity: 1,
    getFillColor: f => {
      switch (f.properties.fsr) {
        case 0:
          return [17, 237, 48];
        case 0.35:
          return [18, 177, 35];
        case 1.3:
          return [19, 118, 22];
        default:
          return [20, 59, 10];
      }
    },
    lineWidthUnits: "pixels",
    getLineWidth: 1,
    lineWidthMinPixels: 1,
    pickable: true,
    autoHighlight: true,
    onHover: setTooltip
  });

  const ocpLayer = new deck.carto.CartoSQLLayer({
    id: "ocp",
    data: "ocp",
    opacity: 1,
    getFillColor: f => {
      switch (f.properties.fsr) {
        case 0:
          return [245, 204, 204];
        case 0.35:
          return [228, 180, 182];
        case 0.55:
          return [211, 156, 161];
        case 0.8:
          return [194, 133, 139];
        case 1:
          return [178, 109, 118];
        case 1.2:
          return [161, 85, 97];
        case 1.75:
          return [144, 62, 75];
        case 2.5:
          return [127, 38, 54];
        default:
          return [111, 15, 33];
      }
    },
    lineWidthUnits: "pixels",
    getLineWidth: 1,
    lineWidthMinPixels: 1,
    pickable: true,
    autoHighlight: true,
    onHover: setTooltip
  });

  const deltaLayer = new deck.carto.CartoSQLLayer({
    id: "delta",
    data: "delta",
    opacity: 1,
    getFillColor: f => {
      if (f.properties.delta < -1.1) {
        return [204, 245, 245];
      } else if (f.properties.delta < -0.25) {
        return [166, 198, 211];
      } else if (f.properties.delta < 0.6) {
        return [128, 151, 177];
      } else if (f.properties.delta < 1.45) {
        return [90, 104, 144];
      } else if (f.properties.delta < 2.3) {
        return [52, 57, 110];
      } else {
        return [14, 11, 77];
      }
    },
    lineWidthUnits: "pixels",
    getLineWidth: 1,
    lineWidthMinPixels: 1,
    pickable: true,
    autoHighlight: true,
    onHover: setTooltip
  });

  deckOverlay.setProps({
    layers: [parcelsLayer, buildingsLayer, zonesLayer, ocpLayer, deltaLayer]
  });

  const controlDiv = document.createElement("div");
  CustomControl(
    controlDiv,
    deckOverlay,
    parcelsLayer,
    buildingsLayer,
    zonesLayer,
    ocpLayer,
    deltaLayer
  );
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    new LegendControl(
      "DELTA",
      [">= -1.95", ">= -1.1", ">= -0.25", ">= 0.6", ">= 1.45", ">= 2.3"],
      ["#CCF5F5", "#A6C6D3", "#8097B1", "#5A6890", "#34396E", "#0E0B4D"]
    ).getContainer()
  );

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
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

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    new LegendControl(
      "ZONES",
      ["0", "0.35", "1.3", "2.5"],
      ["#11ED30", "#12B123", "#137616", "#143B0A"]
    ).getContainer()
  );

  // deckOverlay.setMap(map);
  map.addListener("tilt_changed", () => {
    if (map.getTilt() === 45) {
      deckOverlay.setMap(null);
    } else {
      setTimeout(() => deckOverlay.setMap(map), 500);
    }
  });
}
