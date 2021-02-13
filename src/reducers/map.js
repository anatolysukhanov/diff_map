import * as actions from "./../actions";

const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GOOGLE_MAPS_LOADED:
      return {
        ...state,
        isGoogleMapsLoading: false
      };

    case actions.TOGGLE_LAYER:
      let layers = [...state.layers];
      if (action.payload.checked === true) {
        layers.push(action.payload.layer);
      } else {
        const index = state.layers.indexOf(action.payload.layer);
        layers.splice(index, 1);
      }
      return {
        ...state,
        ...(action.payload.layer === "buildings" &&
          action.payload.checked === false && { buildingType: "" }),
        layers
      };

    case actions.CHANGE_BUILDING_TYPE:
      return {
        ...state,
        buildingType: action.payload
      };

    case actions.SHOW_TOOLTIP:
      return {
        ...state,
        tooltip: action.payload
      };

    case actions.FIT_MAP:
      if (action.payload !== null) {
        const [coord1, coord2] = action.payload.split(",");
        const sw = coord1.split(" ");
        const ne = coord2.split(" ");
        return {
          ...state,
          bounds: new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(Number(sw[1]), Number(sw[0])),
            new window.google.maps.LatLng(Number(ne[1]), Number(ne[0]))
          )
        };
      } else {
        return {
          ...state,
          bounds: null
        };
      }

    case actions.TOGGLE_SIDEBAR:
      if (state.bounds !== null) {
        return {
          ...state,
          bounds: null
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default mapReducer;
